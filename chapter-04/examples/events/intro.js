const EventEmitter = require('events');
const emitter = new EventEmitter();               // <1>

emitter.on('date', (date) => {                    // <2>
  console.log('Année : %d', date.getFullYear());
});

emitter.emit('date', new Date('2018-03-01'));     // <3>
emitter.emit('date', new Date('1983-03-24'));
