const {exec} = require('child_process');

const env = {PING_COUNT: 1, ...process.env};                        // <1>

exec('ping -c $PING_COUNT oncletom.io', {env}, (error, stdout) => { // <2>
  if (error) {
    return console.error(error);
  }

  console.log(stdout);
});
