export default function isOdd (number) {
  if (typeof number !== 'number' || Number.isNaN(number)) { // <1>
    throw new Error('number devrait être un nombre')
  }

  if (number % 2) { // <2>
    return true;
  }
  else {            // <3>
    return false;
  }
}
