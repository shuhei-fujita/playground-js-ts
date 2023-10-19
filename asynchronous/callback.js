const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  console.log('File content:', data);
});
