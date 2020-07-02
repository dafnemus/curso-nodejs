/* eslint-disable no-unused-vars */
const express = require('express');
const productsController = require('../../controllers/v1/products-controllers');

const router = express.Router();

router.use((req, rest, next) => {
  console.log('next'); next();
});

router.post('/create', productsController.createProduct);


module.exports = router;
