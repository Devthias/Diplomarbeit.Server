var http = require('http'),
  express = require('express'),
  router = require('./router'),
  models = require('./models'),
  repository = require('./repository'),
  authenticator = require('./authenticator');

var router = router.createRouter(models);
var app = express();

GLOBAL.repository = repository;

app.use('/auth', express.basicAuth(function(user, pass, callback) {
 var result = authenticator.authenticateUser(user, pass);
 callback(null /* error */, result);
}));

app.use(function(req, res, next){
  var body = "";

    req.addListener('data', function (chunk) { body += chunk });
    req.addListener('end', function () {
        router.handle(req, body, function (result) {
            res.jsonp(result.body);
        });
    });
});

http.createServer(app).listen(3000);
