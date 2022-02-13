var http = require("http");
var fs = require("fs");
var url = require("url");

var app = http.createServer(function (request, response) {
  var uurl = request.url;
  var queryData = url.parse(uurl, true).query;
  console.log(queryData);

  fs.readFile(`data/${queryData.id}`, "utf8", function (err, data) {
    let description = data;
    var template = `<!doctype html>
  <html>
  <head>
    <title>WEB1 - ${fs.readFileSync(__dirname + uurl)}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="index.html">WEB</a></h1>
    <ol>
      <li><a href="1.html">HTML</a></li>
      <li><a href="2.html">CSS</a></li>
      <li><a href="3.html">JavaScript</a></li>
    </ol>
    <h2>${fs.readFileSync(__dirname + uurl)}</h2>
    <p>
        ${description}  
    </p>
  </body>
  </html>
  `;
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + uurl));
  });
});
app.listen(3000);
//
