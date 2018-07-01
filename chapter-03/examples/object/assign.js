const o = {
  first_name: 'Francine',
};

const o2 = Object.assign({}, o, {location: 'Drôme'});
console.log(o2);        // <1>
console.log(o);         // <2>

Object.assign(o2, {location: 'Paris'}, {location: 'Ardèche'});
console.log(o2);        // <3>
