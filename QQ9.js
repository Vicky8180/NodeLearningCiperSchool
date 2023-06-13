const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Error reading file');
    } else {
      res.end(data);
    }
  });
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
