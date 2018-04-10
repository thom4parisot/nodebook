const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.once('date', (date) => {                  // <1>
  console.log('Année : %d', date.getFullYear());
});

emitter.emit('date', new Date('2018-03-01'));
emitter.emit('date', new Date('1983-03-24'));
