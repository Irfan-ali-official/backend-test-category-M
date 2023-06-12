const { readFileAsync } = require('./fileRead');

const filePath = 'hello.txt';

readFileAsync(filePath)
  .then((data) => {
    console.log('File data:', data);
  })
  .catch((err) => {
    console.error('Error reading file data:', err);
  });
