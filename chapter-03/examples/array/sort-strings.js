const sortAlpha = (a, b) => a.localeCompare(b);
console.log(['A', 'b', 'c', 'a'].sort(sortAlpha));// <1>

const undeux = [
  {label: 'un', order: 1},
  {label: 'deux', order: 2}
];

const sortLabel = (a, b) => a.label.localeCompare(b.label);
console.log(undeux.sort(sortLabel));              // <2>
