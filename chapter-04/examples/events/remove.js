const EventEmitter = require('events');
const emitter = new EventEmitter();

const log = (date) => {
  console.log(
    'Il est %s:%s:%s',
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getSeconds()
  );
};

setInterval((counter) => {
  console.log('tic');
  emitter.emit('date', new Date(), counter++);              // <1>
  counter === 3 ? emitter.removeListener('date', log) : ''; // <2>
  counter === 5 ? process.exit(0) : '';
}, 1000, 0);

emitter.on('date', log);
