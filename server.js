const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Resolve file path
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  
  // Get file extension
  const extname = String(path.extname(filePath)).toLowerCase();
  let contentType = MIME_TYPES[extname] || 'application/octet-stream';

  // Read and serve file
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // Page not found
        fs.readFile(path.join(__dirname, 'index.html'), (err, htmlContent) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 Internal Server Error');
          } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(htmlContent, 'utf-8');
          }
        });
      } else {
        // System error
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`500 Internal Error: ${error.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`Quiz server running at: http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to terminate`);
  console.log(`==================================================`);
});
