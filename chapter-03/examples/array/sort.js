const sortAsc = (a, b) => a - b;
const sortDesc = (a, b) => b - a;

console.log([1, 3, 2].sort(sortAsc));                 // <1>

const undeux = [
  {label: 'deux', order: 2},
  {label: 'un', order: 1}
];

console.log(undeux.sort((a, b) => a.order - b.order));// <2>
