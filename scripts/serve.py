"""Serve the site locally with HTTP range support, so video seeking works.

Python's built-in `http.server` ignores Range headers, which stops browsers
from seeking in <video>. GitHub Pages supports ranges, so this only matters
for local previews.

Usage (from the repository root):
    python3 scripts/serve.py [port]    # default port 8000
"""
import os
import re
import sys
from functools import partial
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

RANGE_RE = re.compile(r"bytes=(\d*)-(\d*)$")


class RangeRequestHandler(SimpleHTTPRequestHandler):
    def send_head(self):
        self._range = None
        match = RANGE_RE.match(self.headers.get("Range", "").strip())
        path = self.translate_path(self.path)
        if not match or not os.path.isfile(path):
            return super().send_head()

        size = os.path.getsize(path)
        start, end = match.groups()
        if start:
            first, last = int(start), int(end) if end else size - 1
        elif end:
            first, last = max(size - int(end), 0), size - 1
        else:
            return super().send_head()
        last = min(last, size - 1)
        if first > last:
            self.send_response(HTTPStatus.REQUESTED_RANGE_NOT_SATISFIABLE)
            self.send_header("Content-Range", f"bytes */{size}")
            self.end_headers()
            return None

        f = open(path, "rb")
        f.seek(first)
        self._range = last - first + 1
        self.send_response(HTTPStatus.PARTIAL_CONTENT)
        self.send_header("Content-Type", self.guess_type(path))
        self.send_header("Content-Range", f"bytes {first}-{last}/{size}")
        self.send_header("Content-Length", str(self._range))
        self.send_header("Accept-Ranges", "bytes")
        self.end_headers()
        return f

    def copyfile(self, source, outputfile):
        if self._range is None:
            return super().copyfile(source, outputfile)
        remaining = self._range
        while remaining > 0:
            chunk = source.read(min(64 * 1024, remaining))
            if not chunk:
                break
            outputfile.write(chunk)
            remaining -= len(chunk)

    def end_headers(self):
        if self._range is None:
            self.send_header("Accept-Ranges", "bytes")
        super().end_headers()

    _range = None


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    handler = partial(RangeRequestHandler, directory=root)
    with ThreadingHTTPServer(("", port), handler) as server:
        print(f"Serving {root} at http://localhost:{port}")
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass
