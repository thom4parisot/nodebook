'use strict';

const glob = require('glob');
const {join,dirname} = require('path');

const BLACKLIST = [
  'dist',
  'node_modules',
  'tests',
  'appendix-b'
];

const list = glob.sync('*/package.json', {
  cwd: join(__dirname, '..', '..')
}).map(dirname).filter(dir => !BLACKLIST.includes(dir));

const dir = (chapter) => join(__dirname, '..', '..', chapter);

module.exports = {
  command: 'chapters',
  desc: 'Liste les chapitres de l\'ouvrage.',
  handler: () => console.log(list.join(', ')),
};

module.exports.list = list;
module.exports.dir = dir;
