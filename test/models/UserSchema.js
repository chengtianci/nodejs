var mongoose = require('mongoose');
var schemma = mongoose.Schemma;

var UserSchema = new Schemma({
	name : String;
	passwd : String;
});

exports.UserSchema = UserSchema;