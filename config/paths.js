const { resolve, join } = require('path');

const cwd = process.cwd();
const srcPath = resolve(join(cwd, 'src'));
const entryFile = join(srcPath, 'entry.js');
const indexFile = join(srcPath, 'index.html');
const buildPath = join(srcPath, 'public');

module.exports = {
  cwd,
  srcPath,
  entryFile,
  indexFile,
  buildPath,
};
