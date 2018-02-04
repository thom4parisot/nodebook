const francine = {
  first_name: 'Francine',
  location: 'Drôme',
};

console.log(francine.hasOwnProperty('location'));   // <1>
console.log(francine.hasOwnProperty('twitter'));    // <2>
