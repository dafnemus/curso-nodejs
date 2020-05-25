var http = require("http");

var server = http.createServer(function (request, response) {
  //definiendo rutas.
  if (request.url === "/") {
    response.writeHead(200, { "Conten-Type": "text/html" });
    response.write("<html><body><p>HOME PAGE</p></body></html>");
    response.end();
  } else if (request.url === "/exit") {
    response.writeHead(200, { "Conten-Type": "text/html" });
    response.write("<html><body><p>BYE</p></body></html>");
    response.end();
  } else {
    response.writeHead(404, { "Conten-Type": "text/html" });
    response.write("<html><body><p>NOT FOUND</p></body></html>");
    response.end();
  }
});

server.listen(4000);

console.log("running on 4000");
