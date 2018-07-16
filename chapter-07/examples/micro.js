'use strict';

const micro = require('micro');
const {random} = require('pokemon');

const server = micro((req, res) => random()); // <1>

server.listen(4000);                          // <2>
