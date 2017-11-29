var IndexController = {}

IndexController.index = function (req,res,next) {
	var user = {
		name : 'chengtainci',
	}
	res.render('index',{
		user : user
	});
}

module.exports = IndexController;

