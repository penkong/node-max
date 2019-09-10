const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');



////////////////////////////////
const p = path.join(rootDir, 'data', 'products.json');
//
const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  })
}

// const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    // we must save it to new file
    // const p = path.join(rootDir, 'data', 'products.json');
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
    // to store first of all you need to know which it there
    // like find in mongo
    // for big data must not use this logic
    // must read the as stream for efficiency createReadStream();
    // fs.readFile(p, (err, fileContent) => {
    //   let products = [];
    //   if(!err) {
    //     // take json and give us back obj or array of obj
    //     products = JSON.parse(fileContent);
    //   }
      // this is our new product
    //  });
  }
  // static make sure we call it directly on class itself
  // not on a instant object
  static fetchAll(cb){ 
    getProductsFromFile(cb);
  }
}