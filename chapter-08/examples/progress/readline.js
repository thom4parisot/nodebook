'use strict';

const readline = require('readline');
const s = process.stdout;

console.log('Initializing…');

if (process.stdout.isTTY) {
  setInterval(() => {
    const now = new Date();
    const [hour, minutes] = [now.getUTCHours(), now.getUTCMinutes()];
    const sep = now.getUTCSeconds() % 2 ? ':': ' ';
    readline.moveCursor(s, 0, -1);
    readline.clearLine(s, 0);
    console.log(`Il est ${hour}${sep}${minutes}`)
  }, 1000);
}
else {
  console.log("C'est pas un TTY.")
}
