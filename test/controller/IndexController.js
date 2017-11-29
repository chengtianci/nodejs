var IndexController = {};

IndexController.index = function (req,res,next) {
	var user = "chengtianci";
	res.render('index',{
		user : user
	})
}

module.exports = IndexController;