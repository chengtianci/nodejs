var mongoose = require('mongoose');
var Schema = mongoose.schema;

var UserShema = new Schema({
	name : String,
	passwd : String
})
exports.UserShema = UserShema;