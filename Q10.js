const fs = require('fs');

const content = 'Hello content!';

fs.appendFile('mynewfile1.txt', content, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
  } else {
    console.log('Content appended to file successfully.');
  }
});
