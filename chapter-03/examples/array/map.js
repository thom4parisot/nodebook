const newArray = ['a', ' b', 'c '].map(value => {
  return value.trim().toUpperCase();
});

console.log(newArray); // <1>
