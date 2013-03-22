var orm = require('orm');

exports.login = function(){
	return('login called...');
};

exports.authenticate = function(user, pass){
	return false;
};

exports.getWork = function(){
	return('getWork called...');
};