'use strict';

const moment = require('moment');
moment.locale('fr');

const date = moment('11 septembre 2014', 'DD MMMM YYYY');

console.log(date.toISOString());            // <1>

date.add(2, 'days').add(5, 'hours');

console.log(date.format('D/MM/YY'));        // <2>
console.log(date.from('2014-09-11', true)); // <3>
