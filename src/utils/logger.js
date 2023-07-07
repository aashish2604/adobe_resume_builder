const winston = require('winston');
const { options } = require('../../configs/logger_config.json');

class Logger {
  constructor() {
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console(options.console),
        new winston.transports.File(options.file)
      ]
    });
  }

  static getLoggerInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  static getLogger() {
    const _logger = Logger.getLoggerInstance();
    return _logger.logger;
  }
}

module.exports = Logger;
