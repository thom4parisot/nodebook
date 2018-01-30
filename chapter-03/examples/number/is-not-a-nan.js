const result = 10 / 'fromage';

if (typeof result === 'number' && !Number.isNaN(result)) {
  console.log('Ceci n\'est pas un NaN.');
}
else {
  console.log('L\'opération produit un nombre qui n\'en est pas un.');
}
