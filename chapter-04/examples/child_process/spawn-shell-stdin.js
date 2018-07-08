const {spawn} = require('child_process');
const options = {shell: true};

const subprocess = spawn('tr 0-9a-f a-p', options); // <1>

subprocess.stdout.on('data', (data) => {
  console.log(String(data));
});

subprocess.stdin.write('0123 abcd');
subprocess.stdin.end();
