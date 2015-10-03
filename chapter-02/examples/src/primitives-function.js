'use strict';

function filterSparseArray (array) {
  return array.filter(isNotNullOrUndefined);
}

const isNotNullOrUndefined = function (value) {
  return !isEqualTo(value, [null, undefined]);
}

const isEqualTo = function isEqualTo(value, compareWith) {
  return compareWith.some((v) => v === value);
}

(function(){
  const values = [,3,,,1];

  console.log(typeof Date);               // <1>
  console.log(isNotNullOrUndefined(null));// <2>
  console.log(filterSparseArray(values)); // <3>
})();

console.log(values);      // <4>
