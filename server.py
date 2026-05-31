#!/usr/bin/env python3
"""Simple HTTP server for local website testing."""

import http.server
import socketserver
import os
import sys
from pathlib import Path

PORT = 8000


# --------------------------------------------------------------
class MyHTTPRequestHandler(
    http.server.SimpleHTTPRequestHandler
):
    """Custom handler for MIME types and headers."""

    # ----------------------------------------------------------
    def end_headers(self):
        """Add cache control headers."""
        self.send_header(
            'Cache-Control',
            'no-cache, no-store, must-revalidate'
        )
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    # ----------------------------------------------------------
    def guess_type(self, path):
        """Return proper MIME type for path."""
        mimetype = super().guess_type(path)
        if path.endswith('.js'):
            return 'application/javascript'
        elif path.endswith('.css'):
            return 'text/css'
        return mimetype


# --------------------------------------------------------------
def setup_directory():
    """Change to website directory."""
    script_dir = Path(__file__).parent
    website_dir = script_dir / "website"
    os.chdir(website_dir)


# --------------------------------------------------------------
def run_server():
    """Start the HTTP server."""
    with socketserver.TCPServer(
        ("", PORT),
        MyHTTPRequestHandler
    ) as httpd:
        print(f"Server running at http://localhost:{PORT}/")
        print(f"Open http://localhost:{PORT}/ in browser")
        print("Press Ctrl+C to stop the server")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
            sys.exit(0)


# --------------------------------------------------------------
def main():
    """Main function."""
    setup_directory()
    run_server()


# --------------------------------------------------------------
if __name__ == "__main__":
    main()
