'use strict';

const newArray = ['a', ' B', 'c '].map(value => {
  return value.trim().toUpperCase();
});

console.log(newArray); // <1>
