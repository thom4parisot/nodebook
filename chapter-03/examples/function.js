'use strict';

function isEqualTo (value, compareWith) {
  return compareWith.some(v => v === value);  // <1>
}

const isNotNullOrUndefined = function (value) {
  return !isEqualTo(value, [null, undefined]);
};

function filterSparseArray (array) {
  return array.filter(isNotNullOrUndefined);  // <2>
}

(() => {                              // <3>
  // eslint-disable-next-line no-sparse-arrays
  const values = [,3,,,1];

  console.log(typeof Date);               // <4>
  console.log(isNotNullOrUndefined(null));// <5>
  console.log(filterSparseArray(values)); // <6>
})();

// eslint-disable-next-line no-undef
console.log(values);                      // <7>
