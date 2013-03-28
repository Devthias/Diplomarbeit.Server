var modelBase = function(){
	var parameters = {};

	if(arguments[0]) parameters = arguments[0];

	console.log('base class constructor called');

	for(var index in this.prototype){
		if(parameters[index]){
			this[index] = parameters[index];
		}
	}
}

module.exports = modelBase;