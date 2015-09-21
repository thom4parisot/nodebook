'use strict';

var express = require('express');
var app = express();

require('./src/configure-app')(app);

app.use('/users', require('./src/routes/users'));

app.listen(3000);