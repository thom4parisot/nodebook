const {spawn} = require('child_process');

const subprocess = spawn('cat', [__filename]);  // <1>

subprocess.stdout.on('data', (data) => {        // <2>
  console.log(String(data));                    // <3>
});
