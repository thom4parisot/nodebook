const past = new Date('2013-12-04 10:00:00');
const options = {
  year: 'numeric', month: 'short', day: 'numeric'
};
const longOptions = {
  year: 'numeric', month: 'long', day: 'numeric',
  weekday: 'long'
};

const fr = new Intl.DateTimeFormat('fr-FR', options);
const frLong = new Intl.DateTimeFormat('fr-FR', longOptions);

console.log(fr.format(past));         // <1>
console.log(frLong.format(past));     // <2>
