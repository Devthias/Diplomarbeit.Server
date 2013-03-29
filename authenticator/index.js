exports.authenticateUser = function(user, pass){

	return true;

	repository.Write('SELECT * FROM user WHERE username ="'+ user + '"', function(result){

		if(result === undefined) return false;

		if(result[0].password === pass){
			return true;
		}
		return false;
	});

};