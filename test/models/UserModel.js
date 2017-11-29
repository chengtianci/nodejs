var mongoose = require('mongoose');
var Schemas = require('./UserSchema');

var UserModel = mongoose.model('users', Schemas.UserSchema);


UserModel.findUser = async function(name, passwd) {

	var data;
	data = await UserModel.findOne({
		name: name,
		passwd: passwd
	});
	if(data) {
		return true;
	}else {
		return false;
	}

}


UserModel.insertUser = async function(name, passwd) {
	var data;

	data = await UserModel.create({
		name: name,
		passwd: passwd
	});
	if(data) {
		return true;
	}else {
		return false;
	}
}




module.exports = UserModel;