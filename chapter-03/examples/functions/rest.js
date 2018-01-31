const combien_de = (nom, ...params) => {
  console.log(`On a compté ${params.length} ${nom}.`);
};

combien_de('patates', 'un', 'deux', 'trois'); // <1>
