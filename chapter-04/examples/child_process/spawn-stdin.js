const {spawn} = require('child_process');

const subprocess = spawn('tr', ['0-9a-f', 'a-p']);
subprocess.stdout.on('data', (data) => {
  console.log(String(data));              // <3>
});

subprocess.stdin.write('0123 abcd');      // <1>
subprocess.stdin.end();                   // <2>
