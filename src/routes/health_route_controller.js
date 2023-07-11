const AbstractRouteController = require("./abstract_route_controller");
const StatusConstants = require("../constants/status_constants");
const Logger=require("../utils/logger");

const logger=Logger.getLogger();

class HealthCheckRouteController extends AbstractRouteController {
    constructor(link) {
      super();
      this.path = "/health";
      this.InitializeController(link,this.checkHeaders);
    }
  
    async runService(req, res) {
      logger.info("Health check successful");
      res.send("Server is healthy");
    }
  }
  
  module.exports = HealthCheckRouteController;