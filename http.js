var http = require('http'),
 	router = require('./routes');

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
}).listen(8888);

console.log('Server running on http://127.0.0.1:3000');