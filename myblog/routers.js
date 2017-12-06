var Express = require('express');
var Router = Express.Router();

var IndexController = require('./controllers/IndexController');
Router.use('/index',IndexController.index);
Router.use('/test',IndexController.test);

var MainController = require('./controllers/MainController');
Router.use('/main',MainController.main);


Router.use('/',IndexController.index);
module.exports = Router;
