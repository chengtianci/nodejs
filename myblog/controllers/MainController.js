var MainController = {}
 
MainController.main = function (req,res,next) {
	var user = {
		id : 'chengtianci'
	}
	res.render('main',{
		user : user
	})
}
module.exports = MainController;