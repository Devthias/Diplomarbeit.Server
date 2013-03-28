exports.authenticateUser = function(user, pass){
	console.log('authenticator called...');
	return user === 'user' && pass ==='1234';
};