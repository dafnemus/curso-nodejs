const { countries, languages } = require('countries-list');

const routes = (app) => {
  app.get('/', (request, response) => {
    response.send('HELLO');
  });

  app.get('/info', (request, response) => {
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
};


module.exports = routes;
