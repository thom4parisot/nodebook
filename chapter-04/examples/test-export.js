const isWord = (word) => {
  return /^[\w\s\.,\-\?!;+]{2,}$/.test(word) && Number.isNaN(Number(word));
};

export default function countWords (sentence) { // <1>
  return sentence
    .split(' ')
    .filter(isWord)
    .length;
}
