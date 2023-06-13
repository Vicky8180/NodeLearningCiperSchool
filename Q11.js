const fs = require('fs');

const fileName = 'mynewfile2.txt';

fs.open(fileName, 'w', (err, file) => {
  if (err) {
    console.error('Error creating file:', err);
  } else {
    console.log('File created successfully.');

    const content = 'Hello content!';

    fs.appendFile(file, content, (err) => {
      if (err) {
        console.error('Error appending to file:', err);
      } else {
        console.log('Content appended to file successfully.');
      }
    });
  }
});
