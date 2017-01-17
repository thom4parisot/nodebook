'use strict';

const EventEmitter = require('eventemitter3');
const emitter = new EventEmitter();

emitter.on('ping', pingData => console.log('on: %s', pingData));
emitter.once('ping', pingData => console.log('once: %s', pingData));

console.log(emitter.listeners('ping')); // <1>

emitter.emit('ping', ['ping', 'ping']); // <2>
emitter.emit('ping', ['pong']);         // <3>

emitter.removeListener('ping');
emitter.emit('ping', ['pong']);         // <4>
