const EventEmitter = require('events');

class Car extends EventEmitter {                   // <1>
  constructor (name) {
    super();                                       // <2>
    this.name = name;
  }

  start () {
    this.emit('action', this, 'démarrer');         // <3>
  }
}

const auto = new Car('Boombo');
auto.on('action', (car, action) => {               // <4>
  console.log('%s est en train de %s', car.name, action);
});

auto.start();
