const francine = {
  first_name: 'Francine',
};

const francine26 = Object.assign({}, francine, {location: 'Drôme'});
console.log(francine26);      // <1>
console.log(francine);        // <2>

Object.assign(francine26, {location: 'Paris'}, {location: 'Ardèche'});
console.log(francine26);      // <3>
