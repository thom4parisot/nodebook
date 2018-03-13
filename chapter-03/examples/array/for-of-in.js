const weekend = ['samedi', 'dimanche'];

for (const index in weekend) {
  console.log(index);             // <1>
  console.log(weekend[index]);    // <2>
}

for (const day of weekend) {
  console.log(day);               // <3>
}
