const {exec} = require('child_process');

exec('ls .', {cwd: null}, (error, stdout, stderr) => {  // <1>
  console.log(stdout);
});
