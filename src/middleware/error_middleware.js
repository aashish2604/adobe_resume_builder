const StatusConstants = require('../constants/status_constants');

class ErrorHandlingMiddleware {
  constructor(_app) {
    this.app = _app;
  }

  async handle404Error() {
    this.app.use((req, resp) => {
      resp.status(StatusConstants.code404).send(StatusConstants.code404Message);
    });
  }
  async handle400Error() {
    this.app.use((req, resp) => {
      resp.status(StatusConstants.code400).send(StatusConstants.code400Message);
    });
  }
  async handle401Error() {
    this.app.use((req, resp) => {
      resp.status(StatusConstants.code401).send(StatusConstants.code401Message);
    });
  }
  async handle500Error() {
    this.app.use((req, resp) => {
      resp.status(StatusConstants.code500).send(StatusConstants.code500Message);
    });
  }
}

module.exports = ErrorHandlingMiddleware;
