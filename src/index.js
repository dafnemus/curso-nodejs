/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config(); // habilita las variables de entorno

const routesV1 = require('./routes/v1');

const app = express();

console.log('MONGO', process.env.MONGO);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routesV1(app);

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conected to MongoDB'); // cuando la conexión con la base de datos es exitosa
  app.listen(PORT, () => {
    console.log('running on', PORT);
  });
}).catch(error => {
  console.log('mongodb error', error);
});
