console.log(Array.from('fromage'));            // <1>

// utilisation du second argument
const uppercase = (letter) => letter.toUpperCase();
console.log(Array.from('fromage', uppercase)); // <2>
