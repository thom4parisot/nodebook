'use strict';

const busStop = {
  name: 'Vassal Road',
  services: ['36', 'N136', '185']
};

Object.defineProperty(busStop, 'internal_code', {
  value: '4811',
  enumerable: false
});

console.log(Object.keys(busStop));    // <1>

for (let prop of busStop) {
  console.log(prop);                  // <2>
}
