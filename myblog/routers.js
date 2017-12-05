var Express = require('express');
var Router = Express.Router();

var IndexController = require('./controllers/IndexController');
// Router.use('/',IndexController.index);
Router.use('/index',IndexController.index);

var MainController = require('./controllers/MainController');
Router.use('/main',MainController.main);

module.exports = Router;
