const isString = (thing) => typeof thing === 'string';

const isWord = (word) => {
  return isString(word) && /^[\w\s.,\-?!;+]{2,}$/.test(word);
};

export default function countWords (sentence) { // <1>
  return sentence.split(' ').filter(isWord).length;
}
