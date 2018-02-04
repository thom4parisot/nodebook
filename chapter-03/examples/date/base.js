const now = new Date();
const past = new Date('2013-12-04 10:00:00'); // <1>

console.log(past.getUTCFullYear());           // <2>
console.log(now.getUTCFullYear());            // <3>
