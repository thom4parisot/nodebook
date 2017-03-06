'use strict';

let result;
const pairs = [[1, 2], [3, 4], [5, 6]];

result = pairs.reduce((acc, pair) => acc + pair[0] + pair[1], 0);
console.log(result);    // <1>

result = pairs.reduce((acc, pair) => {
  acc[0] += pair[0];
  acc[1] += pair[1];
  return acc;
}, [0, 0]);
console.log(result);    // <2>
