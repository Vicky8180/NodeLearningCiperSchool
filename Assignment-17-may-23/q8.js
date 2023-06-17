const fs = require('fs');
const http = require('http');

// Create a new file
fs.writeFile('newfile.txt', 'Hello, this is a new file!', (err) => {
  if (err) throw err;
  console.log('New file created.');
});

// Add data to a file
fs.writeFile('data.txt', 'This is some data.', (err) => {
  if (err) throw err;
  console.log('Data added to file.');
});

// Append data to a file
fs.appendFile('data.txt', '\nThis is additional data.', (err) => {
  if (err) throw err;
  console.log('Data appended to file.');
});

// Read an HTML file and display it on the browser
http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end('404 Not Found');
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}).listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
