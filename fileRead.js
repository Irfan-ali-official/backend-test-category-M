const fs = require('fs');

function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') {
          // File does not exist
          reject(new Error('File not found'));
        } else {
          // Other error while reading the file
          reject(err);
        }
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = {
  readFileAsync,
};
