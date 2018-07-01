const weekdays = [
  'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'
];

const [first, second, ...rest] = weekdays;
console.log(rest);                  // <1>

// revient au même que
// const [,, ...rest] = weekdays;
