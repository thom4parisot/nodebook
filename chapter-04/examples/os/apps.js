const {type} = require('os');
const {readdir} = require('fs');

const log = (label) => (error, modules) => {
  console.log('Applications installées sous %s : %j', label, modules);
};

switch (type()) {
  case 'Windows_NT':  readdir('C:\\Program Files', log('Windows')); break;
  case 'Linux':       readdir('/usr/bin', log('Linux')); break;
  case 'Darwin':      readdir('/Applications', log('macOS')); break;
}
