const counter = 3;

console.log(Boolean(''));       // <1>
console.log(Boolean(counter));  // <2>
console.log(Boolean([]));       // <3>

if (counter) {
  console.log('if (counter) équivaut à if (Boolean(counter))');
}
