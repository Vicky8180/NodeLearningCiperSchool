const fs = require('fs');

const fileName = 'mynewfile3.txt';
const content = 'Hello content!';

fs.writeFile(fileName, content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Content replaced in file successfully.');
  }
});
