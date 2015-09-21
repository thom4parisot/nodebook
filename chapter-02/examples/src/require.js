'use strict';

var fs = require('fs'); // <1>
var setupFormatter = require('./currency-format'); // <2>
var chap2Index = require('../chapitre-02'); // <3>
var _ = require('lodash'); // <4>
var packageInfos = require('./package.json'); // <5>