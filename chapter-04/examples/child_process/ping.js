const {exec} = require('child_process');

const env = {PING_COUNT: 1, ...process.env};    // <1>
const cmd = 'ping -c $PING_COUNT oncletom.io';

exec(cmd, {env}, (error, stdout) => {           // <2>
  return error
    ? console.error(error)
    : console.log(stdout);
});
