class Book {
  constructor({ title }) {
    this.title = title;
  }

  isPublished() {
    return this.is_published === true;
  }

  publish() {
    this.is_published = true;
  }
}

const book1 = new Book({ title: 'Node.js' });
console.log(book1.isPublished());   // <1>
book1.publish();
console.log(book1.isPublished());   // <2>

const book2 = new Book({ title: 'CSS maintenables' });
console.log(book2.isPublished());   // <3>
