const os = require('os');

const {username} = os.userInfo();
const cpus = os.cpus().length;

console.log(
  `Salut ${username}, cet ordinateur a ${cpus} CPU.` // <1>
);
