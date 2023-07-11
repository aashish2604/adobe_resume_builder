const express = require('express');
const InitializeRoutes = require('../../src/core/intialize_routes');
const { server } = require("../../src/core/server");

jest.mock('express', () => {
    const app = {
      use: jest.fn(),
      listen: jest.fn(),
    };
    return jest.fn(() => app);
  });

describe('server', () => {
  let mockExpress;

  beforeEach(() => {
    mockExpress = express();
    express.mockImplementation(() => mockExpress);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should initialize routes', async () => {
    const mockInitializeRoutes = jest.spyOn(InitializeRoutes, 'Initialize').mockResolvedValue();
    const host = 'localhost';
    const port = 4000;

    await server();

    expect(mockInitializeRoutes).toHaveBeenCalledWith(mockExpress, `http://${host}:${port}`);
  });

  test('should start the server', async () => {
    const mockListen = jest.spyOn(mockExpress, 'listen').mockImplementation((port, host, callback) => callback());
    const host = 'localhost';
    const port = 4000;

    await server();

    expect(mockListen).toHaveBeenCalledWith(port, host, expect.any(Function));
  });
});

