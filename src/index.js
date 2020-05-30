/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require('express');
const { countries } = require('countries-list');
const { info, error } = require('./module/my-log');

const app = express();

app.get('/', (request, response) => {
  response.send('HELLO');
});

app.get('/info', (request, response) => {
  info('Hola info');
  response.send('info nodemon 2');
});
app.get('*', (request, response) => {
  response.status(404).send('NOT FOUND');
});
// var server = http.createServer(function (request, response) {
//   var parsed = url.parse(request.url);
//   console.log("parsed", parsed);

//   var pathname = parsed.pathname;

//   var query = querystring.parse(parsed.query);
//   console.log("query", query);

//   if (pathname === "/") {
//     response.writeHead(200, { "Conten-Type": "text/html" });
//     response.write("<html><body><p>HOME PAGE</p></body></html>");
//     response.end();
//   } else if (pathname === "/exit") {
//     response.writeHead(200, { "Conten-Type": "text/html" });
//     response.write("<html><body><p>EXIT</p></body></html>");
//     response.end();
//   } else if (pathname === "/country") {
//     response.writeHead(200, { "Conten-Type": "application/json" });
//     response.write(JSON.stringify(countries[query.code]));
//     response.end();
//   } else if (pathname === "/error") {
//     var result = error(pathname);
//     response.writeHead(200, { "Conten-Type": "text/html" });
//     response.write(result);
//     response.end();
//   } else {
//     response.writeHead(404, { "Conten-Type": "text/html" });
//     response.write("<html><body><p>NOT FOUND</p></body></html>");
//     response.end();
//   }
// });

app.listen(4000, () => {
  console.log('running on 4000');
});
