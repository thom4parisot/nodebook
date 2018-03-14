let [,,text] = process.argv;

const limitIndex = process.argv.indexOf('--limit');     // <1>

if (limitIndex >= 2) {
  const limitValue = process.argv[limitIndex + 1];      // <2>
  text = text.split(' ').slice(0, limitValue).join(' ');// <3>
}

console.log(text);
