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
    await errorMiddleware.handle400Error();
    await errorMiddleware.handle401Error();
    await errorMiddleware.handle500Error();
  }
}

module.exports = InitializeMiddleWare;
