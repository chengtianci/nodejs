var FrontController = {}
 
FrontController.main = function (req,res,next) {
	var user = {
		id : 'chengtianci'
	}
	res.render('front/main',{
		user : user
	})
}
module.exports = FrontController;