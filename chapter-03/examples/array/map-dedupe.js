const soundcheck = ['un', 'deux', 'un', 'deux'];

const dedupe = (element, index, array) => {
  if (array.slice(index+1).includes(element)) {
    return null;
  }

  return element;
}

console.log(soundcheck.map(dedupe));          // <1>
