setTimeout(() => console.log('Une seconde plus tard'), 1000);

setTimeout(() => {
  console.log('Deux secondes plus tard');     // <1>
}, 2000);

process.on('exit', () => {
  console.log('Le processus se termine');     // <2>
});
