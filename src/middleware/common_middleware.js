const Logger = require('../utils/logger');
let bodyParser = require('body-parser');
let cors = require('cors');

class CommonMiddleware {
  constructor(_app) {
    this.app = _app;
  }

  async useBodyParser() {
    this.app.use(bodyParser.json());
  }

  async useURLencoded() {
    this.app.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
  }

  async useCors() {
    this.app.use(cors());
  }

  async logRequests() {
    let logger = Logger.getLogger();
    this.app.use((req, res, done) => {
      logger.info(req.originalUrl);
      done();
    });
  }
}

module.exports = CommonMiddleware;
