const {type} = require('os');
const {readdir} = require('fs');

const log = (error, modules) => {
  return error
    ? console.error(error.message)
    : console.log(modules);
};

switch (type()) {
  case 'Windows_NT': readdir('C:\\Program Files', log); break;
  case 'Linux':      readdir('/usr/bin', log);          break;
  case 'Darwin':     readdir('/Applications', log);     break;
}
