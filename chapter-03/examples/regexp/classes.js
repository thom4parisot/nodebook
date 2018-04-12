const text = 'I ♥ RegExp in 2018';
console.log(text.match(/\u{2665} (\w+)/u));   // <1>

const [,iLove,year] = text.match(/^(I \u{2665}).+(\d{4})$/u);
console.log(`${iLove} ${year}`);              // <2>
