'use strict';

var express = require('express');
var join = require('path').join;
var app = express();

var jqueryPath = require.resolve('jquery/dist/jquery.js');
var nodeModulesPath = join(__dirname, '..', '..', 'node_modules');

app.use('/assets/jquery.js', express.static(jqueryPath)); // <1>
app.use('/assets', express.static(nodeModulesPath));  // <2>

app.listen(3000);
