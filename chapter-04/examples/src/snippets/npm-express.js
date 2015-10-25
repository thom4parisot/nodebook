'use strict';

let express = require('express');
let join = require('path').join;
let app = express();

let jqueryPath = require.resolve('jquery/dist/jquery.js');
let nodeModulesPath = join(__dirname, '..', '..', 'node_modules');

app.use('/assets/jquery.js', express.static(jqueryPath)); // <1>
app.use('/assets', express.static(nodeModulesPath));      // <2>

app.listen(3000);
