console.log(Array.from('fromage'));                   // <1>

const weekend = [['samedi', 'saturday'], ['dimanche', 'sunday']];

console.log(Array.from(weekend, (value) => value[1]));  // <2>
