var express = require('express');

const InitializeMiddleWare = require('./initialize_middleware');
const InitializeRoutes = require('./intialize_routes');
const ServerConfig = require('../../configs/server_config.json');
const Logger=require("../utils/logger");

const logger=Logger.getLogger();

async function server() {
  let app = express();

  let host = ServerConfig.host;
  let port = process.env.PORT || ServerConfig.port;

  let link = `http://${host}:${port}`;

  await InitializeMiddleWare.InitializeCommonMiddleware(app);
  await InitializeRoutes.Initialize(app, link);
  await InitializeMiddleWare.InitializeErrorHandlingMiddleware(app);

  app.listen(port, host, () => {
    logger.info(`Server started listening at ${host} on port ${port}.`);
  });
}

module.exports = {
  server,
};
