const francine = {
  first_name: 'Francine',
  location: 'Drôme',
  twitter: '@FrancineDu26',
};

const {first_name, ...metadata} = francine;

console.log(first_name);          // <1>
console.log(metadata);            // <2>
