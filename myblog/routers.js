var Express = require('express');
var Router = Express.Router();

var IndexController = require('./controllers/IndexController');
Router.use('/',IndexController.index);
Router.use('/index',IndexController.index);

module.exports = Router;
