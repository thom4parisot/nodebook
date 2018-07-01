const {exec} = require('child_process');

exec('npm --version', (error, stdout, stderr) => {  // <1>
  console.log(`npm version ${stdout.trim()}`);      // <2>
});
