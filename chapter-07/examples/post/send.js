'use strict';

const {stringify} = require('querystring');
const {request} = require('http');

const data = { fromage: 'cabécou', 'remember_me': 1 }; // <1>

const options = {
  hostname: 'localhost',
  port: 4000,
  method: 'POST',                                      // <2>
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'// <3>
  }
};

request(options).end(stringify(data));                 // <4>
