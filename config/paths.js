const { resolve, join } = require('path');

const cwd = process.cwd();

// Within main dir
const srcPath = resolve(join(cwd, 'src'));
const nodeModulesPath = resolve(join(cwd, 'node_modules'));

// Within /src
const buildPath = join(srcPath, 'public');
const componentsPath = join(srcPath, 'components');
const entryFile = join(srcPath, 'index.js');
const indexFile = join(srcPath, 'index.html');
const stylesPath = join(srcPath, 'styles');

module.exports = {
  buildPath,
  componentsPath,
  cwd,
  entryFile,
  indexFile,
  nodeModulesPath,
  srcPath,
  stylesPath,
};
