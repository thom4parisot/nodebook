#!/usr/bin/env node

'use strict';

const omelette = require('omelette');
const args = process.argv.slice(2);
const options = ['--help','coucou'];                    // <2>

omelette`nodebook.ch08.autocomplete ${options}`.init(); // <1>

console.log(args);                                      // <3>
