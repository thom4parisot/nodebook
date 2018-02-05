class Book {
  constructor({ title, ean13 }) {     // <1>
    this.title = title;               // <2>
    this.ean13 = ean13;
  }

  toJSON() {                          // <3>
    const {title, ean13} = this;
    return {title, ean13};
  }

  get isbn() {                        // <4>
    return this.ean13.split(3)[1];
  }

  static clean(value) {               // <5>
    return value.replace(/\D/g, '');
  }
}
