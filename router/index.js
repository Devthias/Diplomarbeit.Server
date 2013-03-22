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
		this.get('/auth/language').bind(function (req, res){
			res.send(repository.language.loadAll());
		});
		this.put('/auth/booking').bind(function (req, res){
			res.send(repository.booking.makeBooking());
		});
		this.put('/auth/absence/daily').bind(function (req, res){
			res.send(repository.absence.createDailyAbsence());
		});
		this.put('/auth/absence/time').bind(function (req, res){
			res.send(repository.absence.createTimeAbsence());
		});
		this.put('/auth/request/daily').bind(function (req, res){
			res.send(repository.request.createDailyRequest());
		});
		this.put('/auth/request/time').bind(function (req, res){
			res.send(repository.request.createTimeRequest());
		});
		this.get('/auth/request/{id}').bind(function (req, res){
			res.send(repository.request.loadRequests());
		});
		this.get('/auth/user/login').bind(function (req, res){
			res.send(repository.user.login());
		});
		this.get('/auth/user/work').bind(function (req, res){
			res.send(repository.user.getWork());
		});
	});

	return router;
};