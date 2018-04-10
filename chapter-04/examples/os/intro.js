const os = require('os');

const {username} = os.userInfo();
const cpus = os.cpus().length;

console.log(
  `L'ordinateur a ${cpus} CPU et une session ouverte par ${username}.`  // <1>
);
