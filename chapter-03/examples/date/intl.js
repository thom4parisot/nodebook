const past = new Date('2013-12-04 10:00:00');

const options = { year: 'numeric', month: 'short', day: 'numeric' };
const longOptions = {...options, weekday: 'long', month: 'long'};
const fr = new Intl.DateTimeFormat('fr-FR', options);
const frLong = new Intl.DateTimeFormat('fr-FR', longOptions);

console.log(fr.format(past));
console.log(frLong.format(past));
