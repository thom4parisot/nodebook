'use strict';

const {post} = require('superagent');

post('http://localhost:4000')                 // <1>
  .send('fromage=cabécou')                    // <2>
  .send('remember_me=1')
  .catch(error => console.log(error.message));
