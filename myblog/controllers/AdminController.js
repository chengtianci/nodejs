var AdminController = {}

AdminController.main = function (req,res,next) {
	var user = {
		name: "chengtianci"
	}
	res.render("admin/main",{
		user : user
	})
}
AdminController.info = function (req,res,next) {
	var user = {
		name: "chengtianci"
	}
	res.render("admin/info",{
		user : user
	})
}
AdminController.blog = function (req,res,next) {
	var user = {
		name: "chengtianci"
	}
	res.render("admin/blog",{
		user : user
	})
}
AdminController.account = function (req,res,next) {
	var user = {
		name: "chengtianci"
	}
	res.render("admin/account",{
		user : user
	})
}

module.exports = AdminController