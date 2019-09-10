const path = require('path');
const rootDir = require('../util/path');
// controllers
const productController = require('../controllers/products');

const express = require('express');
const router = express.Router();

// /admin/add-product => GET
// after / is controller logic
// interacting with data => products
// and return a view => res.render();
router.get('/add-product', productController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct);

module.exports = router;
