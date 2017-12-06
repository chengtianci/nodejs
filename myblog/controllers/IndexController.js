var IndexController = {}

IndexController.index = function (req,res,next) {
	var user = {
		name : 'chengtainci',
	}
	res.render('index',{
		user : user
	});
}
IndexController.test = function (req,res,next) {
	res.render('test');
}

module.exports = IndexController;

