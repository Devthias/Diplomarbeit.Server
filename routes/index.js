var journey = require('journey'),
	repository = require('../repository');

exports.createRouter = function(){
	var router = new (journey.Router)();

	console.log('Creating Router...');

	router.map(function(){
		this.root.bind(function (req, res) {
			console.log('root called...');
			res.send("Welcome to my application")
		});
		this.get('/language').bind(function (req, res){
			res.send(repository.language.loadAll());
		});
		this.put('/booking').bind(function (req, res){
			res.send(repository.booking.makeBooking());
		});
		this.put('/absence/daily').bind(function (req, res){
			res.send(repository.absence.createDailyAbsence());
		});
		this.put('/absence/time').bind(function (req, res){
			res.send(repository.absence.createTimeAbsence());
		});
		this.put('/request/daily').bind(function (req, res){
			res.send(repository.request.createDailyRequest());
		});
		this.put('/request/time').bind(function (req, res){
			res.send(repository.request.createTimeRequest());
		});
		this.get('/request/{id}').bind(function (req, res){
			res.send(repository.request.loadRequests());
		});
		this.get('/user/login').bind(function (req, res){
			res.send(repository.user.login());
		});
		this.get('/user/work').bind(function (req, res){
			res.send(repository.user.getWork());
		});
	});

	return router;
};