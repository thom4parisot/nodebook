const EventEmitter = require('events');
const emitter = new EventEmitter();
const tick = () => process.stdout.write('.');
let counter = 0;

setInterval(() => {
  counter++;
  emitter.emit('date', new Date());             // <1>

  if (counter === 5) {
    process.exit(0);
  }
}, 1000);

emitter.on('date', tick);                       // <2>
emitter.on('date', () => {
  if (counter === 3) {
    emitter.removeListener('date', tick);       // <3>
  }
});
