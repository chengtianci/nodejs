var Express = require('express');
var Router = Express.Router();

var IndexFrontController = require("./controllers/front/IndexController");
Router.use('/',IndexFrontController.index);
Router.use('/index',IndexFrontController.index);

module.exports = Router;