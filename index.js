const fs = require('fs');
const { join } = require('path');

const dir = join(__dirname, 'files');

function getFiles(dir, callback) {
  fs.readdir(dir, (err, files) => {
    callback(files);
  });
}

const filesArray = getFiles(dir, files => {
  return files;
});

console.log(filesArray);

module.exports = { getFiles };
