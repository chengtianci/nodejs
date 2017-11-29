var Express = require("express");
var Router  = Express.Router();

var IndexController = require("./controller/IndexController");

Router.get('/',IndexController.index);
Router.get('/index',IndexController.index);

module.exports = Router;