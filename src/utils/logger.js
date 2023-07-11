const winston = require('winston');
const { options } = require('../../configs/logger_config.json');

class Logger {
  constructor() {
    this.logger = winston.createLogger({
      format: winston.format.combine(
        winston.format.timestamp(), // Add a timestamp to the logs
        winston.format.json() // Use JSON format for log messages
      ),
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
