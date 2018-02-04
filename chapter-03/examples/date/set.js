const past = new Date('2013-12-04 10:00:00');

past.setUTCFullYear('2015');           // <1>
console.log(past.toISOString());       // <2>

past.setUTCMonth(1);                   // <3>
console.log(past.toISOString());       // <4>
