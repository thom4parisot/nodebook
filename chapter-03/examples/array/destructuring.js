const weekdays = [
  'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'
];

const [first, second] = weekdays;
console.log(first);               // <1>
console.log(second);              // <2>

const [,, third] = weekdays;
console.log(third);               // <3>
