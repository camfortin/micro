//Local collection for error messages

Errors = new Mongo.Collection(null);

throwError = function(message) {
	Errors.insert({message: message});
};

console.log("I'm working");