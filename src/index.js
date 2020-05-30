const express = require("express");
const { info, error } = require("./module/my-log");
const { countries } = require("countries-list");

var server = http.createServer(function (request, response) {
  var parsed = url.parse(request.url);
  console.log("parsed", parsed);

  var pathname = parsed.pathname;

  var query = querystring.parse(parsed.query);
  console.log("query", query);

  if (pathname === "/") {
    response.writeHead(200, { "Conten-Type": "text/html" });
    response.write("<html><body><p>HOME PAGE</p></body></html>");
    response.end();
  } else if (pathname === "/exit") {
    response.writeHead(200, { "Conten-Type": "text/html" });
    response.write("<html><body><p>EXIT</p></body></html>");
    response.end();
  } else if (pathname === "/country") {
    response.writeHead(200, { "Conten-Type": "application/json" });
    response.write(JSON.stringify(countries[query.code]));
    response.end();
  } else if (pathname === "/error") {
    var result = error(pathname);
    response.writeHead(200, { "Conten-Type": "text/html" });
    response.write(result);
    response.end();
  } else {
    response.writeHead(404, { "Conten-Type": "text/html" });
    response.write("<html><body><p>NOT FOUND</p></body></html>");
    response.end();
  }
});

server.listen(4000);
console.log("running on 4000");
