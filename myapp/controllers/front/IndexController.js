var IndexController = {};

IndexController.index = function (req,res,next) {
	var user = "Chengtianci";
	res.render('front/index',{
		user : user
	})
}

module.exports = IndexController;