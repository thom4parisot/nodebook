const {readdir} = require('fs');

readdir('.', (error, files) => console.log(files));
