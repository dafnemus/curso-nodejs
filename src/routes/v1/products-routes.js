/* eslint-disable no-unused-vars */
const express = require('express');
const productsController = require('../../controllers/v1/products-controllers');

const router = express.Router();

router.use((req, rest, next) => {
  console.log('next'); next();
});

router.post('/create', productsController.createProduct);
router.get('/get-all', productsController.getProduct);
router.get('/get-by-user/:userId', productsController.getProduct);


module.exports = router;
