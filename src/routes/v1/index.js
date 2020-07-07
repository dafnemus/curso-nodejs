const userRoutes = require('./users-routes');
const productsRoutes = require('./products-routes');

module.exports = (app) => {
  app.use('/api/v1/users', userRoutes);
  app.use('/api/v1/products', productsRoutes);
};
