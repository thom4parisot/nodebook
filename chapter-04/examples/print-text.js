let [,,text] = process.argv;

if (process.argv.includes('--uppercase')) { // <1>
  text = text.toLocaleUpperCase();
}

console.log(text);
