
const rootDir = require('../util/path');
const adminData = require('./admin');
const path = require('path');

// controllers
const productController = require('../controllers/products');

const express = require('express');
const router = express.Router();

router.get('/', productController.getProducts);

module.exports = router;
