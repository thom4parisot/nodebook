'use strict';

const EventEmitter = require('eventemitter3');
const emitter = new EventEmitter();

emitter.on('ping', data => console.log('on: %s', data));
emitter.once('ping', data => console.log('once: %s', data));

console.log(emitter.listeners('ping')); // <1>

emitter.emit('ping', ['ping', 'ping']); // <2>
emitter.emit('ping', ['pong']);         // <3>

emitter.removeListener('ping');
emitter.emit('ping', ['pong']);         // <4>
