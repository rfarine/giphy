const { resolve, join } = require('path');

export const cwd = process.cwd();
export const srcPath = resolve(join(cwd, 'src'));
export const entryFile = join(srcPath, 'entry.js');
export const buildPath = join(srcPath, 'dist');

