var http = require('http'),
 	router = require('./routes'),
 	express = require('express');

var router = router.createRouter();

http.createServer(function (request, response) {
    var body = "";

    request.addListener('data', function (chunk) { body += chunk });
    request.addListener('end', function () {
        router.handle(request, body, function (result) {
            response.writeHead(result.status, result.headers);
            response.end(result.body);
        });
    });
}).listen(3000);

console.log('Server running on http://127.0.0.1:3000');