const undeux = ['un', 'deux'];

const printIndex = (element, index, array) => {
  console.log(`${element} : index ${index}`);  // <2>
}

undeux.forEach(printIndex);                    // <1>
