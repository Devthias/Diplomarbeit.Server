var User = function(){
	var parameters = {};
	var defaultProperty = {
		id : 0,
		email : "",
		prename: "",
		lastname: "",
		username: "",
		password: ""
	}
	if(arguments[0]) parameters = arguments[0];

	for(var index in defaultProperty){
		console.log("index: " + index);
		if(parameters[index]){
			console.log("parameter object: " + parameters.index);
			this[index] = parameters[index];
		}
	}
};

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




