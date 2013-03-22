var http = require('http'),
  connect = require('connect'),
  router = require('./router'),
  authenticator = require('./authenticator');

var router = router.createRouter();
var app = connect();

app.use('auth', connect.basicAuth(authenticator.authenticateUser));

app.use(function(req, res, next){
  var body = "";

    req.addListener('data', function (chunk) { body += chunk });
    req.addListener('end', function () {
        router.handle(req, body, function (result) {
            res.writeHead(result.status, result.headers);
            res.end(result.body);
        });
    });
});

http.createServer(app).listen(3000);

console.log('Server running on http://127.0.0.1:3000');