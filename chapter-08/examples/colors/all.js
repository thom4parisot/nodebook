'use strict';

const colors = [30, 31, 32, 33, 34, 35, 36, 37];
const brightColors = [90, 91, 92, 93, 94, 95, 96, 97];

[...colors, ...brightColors].forEach(code => {
  const color = `\x1B[${code}m`;            // <1>
  const bgColor = `\x1B[30;${code + 10}m`;  // <2>
  const reset = '\x1B[0m';                  // <3>

  console.log(`${color}Hello ${bgColor}World${reset}`);
});
