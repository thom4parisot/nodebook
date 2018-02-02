const francine = {
  first_name: 'Francine',
  location: 'Drôme',
  age: 25,
  25: 32,
};

console.log(francine);          // <1>
console.log(francine.age);      // <2>
console.log(francine.twitter);  // <3>

const TWITTER_KEY = 'twitter';
const marty = {
  first_name: 'Marty McFly',
  location: 'Drôme',
  age: 25,
  const: 'dans 5 ans',
  [TWITTER_KEY]: '@martyMcFly',
  printName: function() {
    console.log(this.first_name)
  }
};

marty.printName()
marty.twitter === marty[TWITTER_KEY]
