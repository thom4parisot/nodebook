const {exec} = require('child_process');

exec('npm --version', (error, stdout, stderr) => {              // <1>
  console.log(`version installée de npm : ${stdout.trim()}`);   // <2>
});
