const fs = require('fs');
const { join } = require('path');
const { renameFiles } = require('./index');

describe('rename files in directory', () => {
  it('returns same number of files in directory', () => {
    const dir = join(__dirname, 'files');
    const fileCount = renameFiles(dir).length;
    console.log(fileCount);
  });
});
