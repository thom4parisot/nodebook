const SOCIAL_NETWORK = 'twitter';

const francine = {
  first_name: 'Francine',
  location: 'Drôme',
  [SOCIAL_NETWORK]: '@FrancineDu26',    // <1>
};

console.log(francine[SOCIAL_NETWORK]);  // <2>

// manières équivalentes, sans utilisation de variable
console.log(francine.twitter);
console.log(francine['twitter']);
