/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require('express');
const routes = require('./routes');

const app = express();

routes(app);

app.listen(4000, () => {
  console.log('running on 4000');
});
