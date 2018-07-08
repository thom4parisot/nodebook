const secret_number = Number(process.argv[2] || 3); // <1>

console.log('JEU ! Trouve le nombre auquel je pense :');
process.stdin.on('data', (chunk) => {               // <2>
  if (parseFloat(chunk) === secret_number) {
    console.log('Tu as trouvé, bravo !');
    process.exit(0);                                // <3>
  }
  else {
    console.log('Hm hm, essaie encore.');           // <4>
  }
});
