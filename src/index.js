/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require('express');
const { countries, languages } = require('countries-list');
const { info, error } = require('./module/my-log');

const app = express();

app.get('/', (request, response) => {
  response.send('HELLO');
});

app.get('/info', (request, response) => {
  info('Hola info');
  response.send('info nodemon 2');
});

app.get('/country', (request, response) => {
  // console.log('request.query', request.query);
  response.json(countries[request.query.code]);
});

app.get('/languages/:lang', (request, response) => {
  // console.log('request.params', request.params);
  const lang = languages[request.params.lang];
  if (lang) {
    response.json({ status: 'OK', data: lang });
  } else {
    response.status(404).json({ status: 'Not Found', message: `language ${request.params.lang} not found` });
  }
});

app.get('*', (request, response) => {
  response.status(404).send('NOT FOUND');
});

app.listen(4000, () => {
  // console.log('running on 4000');
});
