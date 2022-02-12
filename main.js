var http = require("http");
var fs = require("fs");
var url = require("url");

var app = http.createServer(function (request, response) {
  var uurl = request.url;
  var queryData = url.parse(uurl, true).query;
  console.log(queryData);
  if (uurl == "/") {
    uurl = "/index.html";
  }
  if (uurl == "/favicon.ico") {
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200);
  console.log(__dirname + uurl);
  response.end(fs.readFileSync(__dirname + uurl));
});
app.listen(3000);
//
