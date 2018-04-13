const {exec} = require('child_process');

exec('ls .', {cwd: '/'}, (error, stdout, stderr) => { // <1>
  console.log(stdout);
});
