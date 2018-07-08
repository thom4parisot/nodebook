const stats = [2, 4, 6, 10];

const sum = (previous, element) => previous + element;  // <2>

console.log(stats.reduce(sum, 0));    // <1>
