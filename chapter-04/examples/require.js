'use strict';

/* eslint-disable */

const fs = require('fs'); // <1>
const setupFormatter = require('./currency-format'); // <2>
const chap4Index = require('..'); // <3>
const _ = require('lodash'); // <4>
const packageInfos = require('../package.json'); // <5>
