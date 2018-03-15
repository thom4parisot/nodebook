const random = (limit) => Math.floor(Math.random() * limit);
let counter = 0;

setInterval(() => {
  process.stdout.write(`${random(30)}\n`);                        // <1>

  (++counter % 5) === 0                                           // <2>
    ? process.stderr.write(`Compteur = ${counter}\n`)             // <3>
    : '';
}, 500);
