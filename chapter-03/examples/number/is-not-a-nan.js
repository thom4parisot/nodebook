const result = 10 / 'fromage';

if (typeof result === 'number' && !Number.isNaN(result)) {
  console.log('Ceci est un nombre.');
}
else {
  console.log('result n\'est pas un nombre.');
}
