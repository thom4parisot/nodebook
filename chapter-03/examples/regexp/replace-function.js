const text = 'I ♥ JavaScript';

const shout = text.replace(/\b(\w+)$/u, (pattern, lang) => {
  return lang.toLocaleUpperCase();
});

console.log(shout);   // <1>
