'use strict';

const sentry = require('raven');                  // <1>
sentry.config(process.env.SENTRY_DSN).install();  // <2>

const express = require('express');
const app = express();

test;                                             // <3>

app.get('/', (request, response) => response.send('OK!'));
app.listen(process.env.PORT || 4000);
