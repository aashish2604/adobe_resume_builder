const AbstractRouteController = require("./abstract_route_controller");
const HelloWorld = require("../services/hello_world");
const StatusConstants = require("../constants/status_constants");

class HelloWorldRouteController extends AbstractRouteController {
  constructor(link) {
    super();
    this.path = '/helloworld';
    this.InitializeController(link);
  }

  async runService(req, resp) {
    let response = await HelloWorld.wishHello();
    console.log(respones);
    resp.status(StatusConstants.code200).send(response);
  }
}

module.exports = HelloWorldRouteController;
