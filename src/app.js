const { server } = require("./core/server");
const Logger = require("./utils/logger");

let logger=Logger.getLogger();
logger.debug("Checking logger debug");
logger.info("Checking logger info");
server();
