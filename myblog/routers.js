var Express = require('express');
var Router = Express.Router();

var IndexController = require('./controllers/IndexController');
Router.use('/index',IndexController.index);
Router.use('/test',IndexController.test);

var FrontController = require('./controllers/FrontController');
Router.use('/front/main',FrontController.main);

var AdminController = require("./controllers/AdminController")
Router.use("/admin/main",AdminController.main);
Router.use("/admin/info",AdminController.info);
Router.use("/admin/blog",AdminController.blog);
Router.use("/admin/account",AdminController.account);

Router.use('/',IndexController.index);	
module.exports = Router;
