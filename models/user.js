var modelBase = require('./modelBase');

var User = function(){};

User.prototype = new modelBase();

User.prototype.id = 0;

User.prototype.email = "";

User.prototype.prename = "";

User.prototype.lastname = "";

User.prototype.username = "";

User.prototype.password = "";

User.prototype.SelectAll = function(res, callback){
	repository.Write('SELECT * FROM user', function(result){
		console.log(result);
		console.log(res);
		callback(res, result);
	});
};

User.prototype.SelectByID = function(res, id, callback){
	repository.Write('SELECT * FROM user WHERE ID ='+id, function(result){
		console.log(result);
		callback(res, result);
	});
};

User.prototype.Insert = function(res, data, callback){
		console.log(data);
		callback(res, "test");
};

module.exports = User;




