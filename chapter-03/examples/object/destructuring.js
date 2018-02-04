const francine = {
  first_name: 'Francine',
  location: 'Drôme',
  twitter: '@FrancineDu26',
};

const {location,twitter} = francine;
console.log(location);            // <1>

const {first_name:prenom} = francine;
console.log(prenom);              // <2>

const {is_admin=false} = francine;
console.log(is_admin);            // <3>
