'use strict';

var ee = require('eventemitter2').EventEmitter2;

var emitter = new ee({ wildcard: true });

emitter.once('ping.*', function(pingData){
  console.log(pingData);
});

emitter.emit('ping.ping', ['ping', 'ping']); // <1>
emitter.emit('ping.pong', ['pong']); // <2>