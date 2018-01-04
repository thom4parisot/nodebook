'use strict';

const express = require('express');
const app = express();

require('./src/configure-app')(app);

app.use('/users', require('./src/routes/users'));

app.listen(3000);
