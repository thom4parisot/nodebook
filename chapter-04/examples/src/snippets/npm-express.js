'use strict';

const express = require('express');
const join = require('path').join;
const app = express();

const jqueryPath = require.resolve('jquery/dist/jquery.js');
const nodeModulesPath = join(__dirname, '..', '..', 'node_modules');

app.use('/assets/jquery.js', express.static(jqueryPath)); // <1>
app.use('/assets', express.static(nodeModulesPath));      // <2>

app.listen(3000);
