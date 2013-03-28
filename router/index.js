var journey = require('journey');

exports.createRouter = function(models){
	var router = new (journey.Router)();

	console.log('Creating Router...');

	router.map(function(){
		this.root.bind(function (req, res) {
			res.send("Welcome to my application")
		});
		this.get('/auth/user').bind(function (req, res){
			var user = new models.user();

			user.SelectAll(res, callback);
		});
		this.get(/^auth\/user\/([0-9]+)$/).bind(function (req, res, id){
			var user = new models.user();

			user.SelectByID(res, id, callback);
		});
		this.post('/auth/user').bind(function (req, res, data){
			var user = new models.user(data);

			user.Insert(res, user, callback);
		});
	});

	var callback = function(res, result){
		res.send(JSON.stringify(result));
	}

	return router;
};