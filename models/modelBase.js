var modelBase = function(){
	var parameters = {};

	if(arguments[0]) parameters = arguments[0];

	for(var index in this.prototype){
		if(parameters[index]){
			this[index] = parameters[index];
		}
	}
}

module.exports = modelBase;