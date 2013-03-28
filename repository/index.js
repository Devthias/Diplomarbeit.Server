var mysql = require('mysql');

var Repository = new function(){};

Repository.pool = mysql.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: 'root',
	database: 'Runtime',
	port: 3306,
});

Repository.Write = function(query, callback){
	this.pool.getConnection(function(err, connection){
		if(err){
			console.log(err);
			return err;
		}
		connection.query(query, function(err, rows){

			connection.end();

			callback(rows);

		});
	});
};

module.exports = Repository;