'use strict';

const glob = require('glob');
const {join,dirname} = require('path');

const list = glob.sync('*/package.json', {
  cwd: join(__dirname, '..', '..')
}).map(dirname);

const dir = (chapter) => join(__dirname, '..', '..', chapter);

module.exports = {
  command: 'chapters [list]',
  desc: 'Liste les chapitres de l\'ouvrage.',
  handler: (args) => {
    console.log(list.join(', '));
  }
};

module.exports.list = list;
module.exports.dir = dir;
