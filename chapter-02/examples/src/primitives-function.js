'use strict';

function filterSparseArray (array) {
  return array.filter(isNotNullOrUndefined);    // <1>
}

const isNotNullOrUndefined = function (value) {
  return !isEqualTo(value, [null, undefined]);
};

function isEqualTo (value, compareWith) {
  return compareWith.some(v => v === value);  // <2>
}

(() => {                              // <3>
  const values = [,3,,,1];

  console.log(typeof Date);               // <4>
  console.log(isNotNullOrUndefined(null));// <5>
  console.log(filterSparseArray(values)); // <6>
})();

console.log(values);                      // <7>
