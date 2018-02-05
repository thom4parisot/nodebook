class Product {
  constructor({ ean13 }) {
    this.ean13 = ean13;
  }
}

class Book extends Product {
  constructor(options) {
    super(options);

    this.title = options.title;
  }
}

const nodebook = new Book({ title: 'Node.js', ean13: '9782212139938' });
console.log(nodebook.title);    // <1>
console.log(nodebook.ean13);    // <2>

const nodeproduct = new Product({ title: 'Node.js', ean13: '9782212139938' });
console.log(nodeproduct.title); // <3>
console.log(nodeproduct.ean13); // <4>
