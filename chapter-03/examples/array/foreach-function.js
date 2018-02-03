const undeux = ['un', 'deux'];

const printIndex = (element, index, array) => {
  console.log(`${element} se trouve à l'index ${index}`);  // <2>
}

undeux.forEach(printIndex);                                // <1>
