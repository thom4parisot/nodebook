const {format} = require('util');

const message = format(           // <1>
  'Il fait %s aujourd\'hui',
  '☀️ '
);
// console.log(message);
