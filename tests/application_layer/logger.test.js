const winston = require('winston');
const Logger = require('../../src/utils/logger');

describe('Logger', () => {
  let mockCreateLogger;

  beforeEach(() => {
    mockCreateLogger = jest.spyOn(winston, 'createLogger');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return the same logger instance when getLoggerInstance is called multiple times', () => {
    const loggerInstance1 = Logger.getLoggerInstance();
    const loggerInstance2 = Logger.getLoggerInstance();

    expect(loggerInstance1).toBe(loggerInstance2);
  });

  test('should return the logger instance when getLogger is called', () => {
    const loggerInstance = Logger.getLoggerInstance();
    const logger = Logger.getLogger();

    expect(logger).toBe(loggerInstance.logger);
  });
});
