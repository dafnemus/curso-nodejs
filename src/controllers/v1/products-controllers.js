const Products = require('../../mongo/models/users');

const createProduct = async (req, res) => {
  try {
    const {
      title, description, price, images, userId,
    } = req.body;
    const product = await Products.create({
      title,
      description,
      price,
      images,
      user: userId,
    });
    res.send({ status: 'OK', data: product });
  } catch (error) {
    console.log('createProduct:', error);
    res.status(500).send({ status: 'ERROR', data: error.message });
  }
};

// const deleteProduct = (req, res) => {};

// const getProduct = (req, res) => {};


module.exports = { createProduct /* deleteProduct, getProduct */ };
