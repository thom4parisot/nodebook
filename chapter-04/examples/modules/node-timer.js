const timerFn = require('./timer.js');

timerFn({ interval: 1000, onTick: console.log });
