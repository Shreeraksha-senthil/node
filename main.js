var http = require('http');
var fs = require('fs');
http.createServer( function (request, response) {
    fs.readFile('input.html', function (err, data) {
    if (err) {
    console.log(err);
    response.writeHead(404, {'Content-Type': 'text/html'});
    }else{
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data.toString());
    }
    response.end();
});
}).listen(8081);
