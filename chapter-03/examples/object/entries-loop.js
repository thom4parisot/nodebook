const francine = {
  first_name: 'Francine',
  location: 'Drôme',
};

Object.entries(francine).forEach(([key, value]) => {
  console.log(`francine.${key} vaut ${value}`);   // <1>
})

// même résultat, autre méthode
for (const [key, value] of Object.entries(francine)) {
  console.log(`francine.${key} vaut ${value}`);
}
