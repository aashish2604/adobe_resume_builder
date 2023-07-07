const CommonMiddleware = require('../middleware/common_middleware');
const ErrorHandlingMiddleware = require('../middleware/error_middleware');

class InitializeMiddleWare {
  static async InitializeCommonMiddleware(app) {
    let middleware = new CommonMiddleware(app);

    await middleware.useBodyParser();
    await middleware.useURLencoded();
    await middleware.useCors();
  }

  static async InitializeErrorHandlingMiddleware(app) {
    let errorMiddleware = new ErrorHandlingMiddleware(app);

    await errorMiddleware.handle404Error();
  }
}

module.exports = InitializeMiddleWare;
