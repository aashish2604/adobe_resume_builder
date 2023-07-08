const express = require("express");
const request = require("supertest");
const Logger = require("../../src/utils/logger");
const CommonMiddleware = require("../../src/middleware/common_middleware");
const StatusConstants=require("../../src/constants/status_constants");
const ErrorHandlingMiddleware=require("../../src/middleware/error_middleware");

describe("Common Middleware tester", () => {
  let app;
  let loggerMock;

  beforeEach(() => {
    app = express();
    loggerMock = {
      info: jest.fn(),
    };
    Logger.getLogger = jest.fn(() => loggerMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should apply bodyParser.json middleware", async () => {
    const middleware = new CommonMiddleware(app);
    await middleware.useBodyParser();

    expect(app._router.stack).toHaveLength(3);
  });

  test("should apply bodyParser.urlencoded middleware", async () => {
    const middleware = new CommonMiddleware(app);
    await middleware.useURLencoded();

    expect(app._router.stack).toHaveLength(3);
  });

  test("should apply cors middleware", async () => {
    const middleware = new CommonMiddleware(app);
    await middleware.useCors();

    expect(app._router.stack).toHaveLength(3);
  });

  test("should log requests with logger.info", async () => {
    const middleware = new CommonMiddleware(app);
    await middleware.logRequests();

    const response = await request(app).get("/test");
    expect(loggerMock.info).toHaveBeenCalledWith("/test");
  });
});

describe("error handling middleware tester", () => {
  let app;
  let middleware

  beforeEach(() => {
    app = express();
    middleware = new ErrorHandlingMiddleware(app);
  });

  test("should handle 404 errors and send appropriate response", async () => {
    await middleware.handle404Error();

    const response = await request(app).get("/nonexistent-route");
    expect(response.status).toBe(StatusConstants.code404);
    expect(response.text).toBe(StatusConstants.code404Message);
  });

  test("should handle 400 errors and send appropriate response", async () => {
    await middleware.handle400Error();

    const response = await request(app).get("/bad-request");
    expect(response.status).toBe(StatusConstants.code400);
    expect(response.text).toBe(StatusConstants.code400Message);
  });

  test("should handle 401 errors and send appropriate response", async () => {
    await middleware.handle401Error();

    const response = await request(app).get("/unauthorized");
    expect(response.status).toBe(StatusConstants.code401);
    expect(response.text).toBe(StatusConstants.code401Message);
  });

  test("should handle 500 errors and send appropriate response", async () => {
    await middleware.handle500Error();

    const response = await request(app).get("/server-error");
    expect(response.status).toBe(StatusConstants.code500);
    expect(response.text).toBe(StatusConstants.code500Message);
  });
});
