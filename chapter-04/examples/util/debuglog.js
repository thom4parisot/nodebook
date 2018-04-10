const {debuglog} = require('util');
const {cpus} = require('os');

const debug = debuglog('nodebook');                     // <1>
const infos = cpus().map(cpu => cpu.model);

console.log('Cet ordinateur a %d CPU.', infos.length);  // <2>
debug('Le modèle de CPU est %s.', infos[0]);            // <3>
