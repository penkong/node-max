

const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    products.push(this);
  }

  // static make sure we call it directly on class itself
  // not on a instant object
  static fetchAll(){ 
    return products;
  }
}