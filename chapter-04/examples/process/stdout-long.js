const random = (limit) => Math.floor(Math.random() * limit);
let counter = 0;

setInterval(() => {
  counter++;
  process.stdout.write(`${random(30)}\n`);            // <1>

  if (Number.isInteger(counter / 5)) {                // <2>
    process.stderr.write(`Compteur = ${counter}\n`);  // <3>
  }
}, 500);
