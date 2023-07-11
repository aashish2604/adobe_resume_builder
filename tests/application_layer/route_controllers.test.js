const AbstractRouteController=require("../../src/routes/abstract_route_controller");
const GenerateResumeRouteController=require("../../src/routes/generate_pdf_route_controller");
const Resume=require("../../src/services/resume");
const validationSchema=require("../../src/validators/request_validation_schema");
const StatusConstants=require("../../src/constants/status_constants");
const Testcases = require("../../src/constants/tescases");
const HealthCheckRouteController=require("../../src/routes/health_route_controller");

const ResumeTestcase = Testcases.ResumeTestcase;
const testcases = new ResumeTestcase();

describe('AbstractRouteController tester',()=>{

    test("Creating instance of AbstractRouteController throws an error",()=>{
        expect(()=>new AbstractRouteController).toThrow();
    });
});

describe('GenerateResumeRouteController tester', () => {
  let mockRequest;
  let mockResponse;

  beforeEach(() => {
    mockRequest = {
      headers: {
        'content-type': 'application/json',
        accept: 'application/pdf',
      },
      body: testcases.validInput,
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
      setHeader: jest.fn(),
      sendFile: jest.fn(),
    };
    jest.spyOn(validationSchema.resumeRequestSchema, 'validate').mockReturnValue({
      error: null,
      value: mockRequest.body,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should check headers and call next if headers are correct', () => {
    const mockNext = jest.fn();
    const controller = new GenerateResumeRouteController();

    controller.checkHeaders(mockRequest, mockResponse, mockNext);

    expect(mockResponse.status).not.toHaveBeenCalled();
    expect(mockResponse.send).not.toHaveBeenCalled();
    expect(mockNext).toHaveBeenCalled();
  });

  test('should return 400 status if content-type header is incorrect', () => {
    const mockNext = jest.fn();
    const controller = new GenerateResumeRouteController();
    mockRequest.headers['content-type'] = 'text/plain';

    controller.checkHeaders(mockRequest, mockResponse, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(StatusConstants.code400);
    expect(mockResponse.send).toHaveBeenCalledWith({"errorCode": 400, "errorMessage": "Bad Request", "message": "The request headers must have Content-type: application/json"});
    expect(mockNext).not.toHaveBeenCalled();
  });

  test('should return 400 status if accept header is incorrect', () => {
    const mockNext = jest.fn();
    const controller = new GenerateResumeRouteController();
    mockRequest.headers.accept = 'text/html';

    controller.checkHeaders(mockRequest, mockResponse, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(StatusConstants.code400);
    expect(mockResponse.send).toHaveBeenCalledWith({"errorCode": 400, "errorMessage": "Bad Request", "message": "The request headers must have Accept: application/pdf"});
    expect(mockNext).not.toHaveBeenCalled();
  });

  test('should call Resume.generateResume and send the file', async () => {
    const controller = new GenerateResumeRouteController();
    jest.spyOn(Resume, 'generateResume').mockResolvedValue();

    await controller.runService(mockRequest, mockResponse);

    expect(Resume.generateResume).toHaveBeenCalledWith(mockRequest.body);
    expect(mockResponse.setHeader).toHaveBeenCalledWith('Content-type', 'application/pdf');
    expect(mockResponse.sendFile).toHaveBeenCalledWith(expect.stringContaining('/outputs/generatedResume.pdf'));
    expect(mockResponse.status).not.toHaveBeenCalled();
    expect(mockResponse.send).not.toHaveBeenCalled();
  });

  test('should return 400 status if validation schema fails', async () => {
    const controller = new GenerateResumeRouteController();
    const errorMessage = 'Validation error';
    jest.spyOn(validationSchema.resumeRequestSchema, 'validate').mockReturnValue({
      error: new Error(errorMessage),
      value: null,
    });

    await controller.runService(mockRequest, mockResponse);

    expect(Resume.generateResume).not.toHaveBeenCalled();
    expect(mockResponse.status).toHaveBeenCalledWith(StatusConstants.code400);
    expect(mockResponse.send).toHaveBeenCalledWith({
      message: errorMessage,
      errorCode: StatusConstants.code400,
      errorMessage: StatusConstants.code400Message
    });
    expect(mockResponse.setHeader).not.toHaveBeenCalled();
    expect(mockResponse.sendFile).not.toHaveBeenCalled();
  });

  
});


describe("HealthCheckRouteController", () => {
  let healthCheckController;

  beforeEach(() => {
    healthCheckController = new HealthCheckRouteController();
  });

  it("should extend AbstractRouteController", () => {
    expect(healthCheckController).toBeInstanceOf(AbstractRouteController);
  });

  it("should have the correct route path", () => {
    expect(healthCheckController.path).toBe("/health");
  });


  describe("runService method", () => {
    let mockRequest;
    let mockResponse;

    beforeEach(() => {
      mockRequest = {};
      mockResponse = {
        send: jest.fn(),
      };
    });

    afterEach(() => {
      mockResponse.send.mockClear();
    });

    it("should send 'Server is healthy' response", async () => {
      await healthCheckController.runService(mockRequest, mockResponse);
      expect(mockResponse.send).toHaveBeenCalledWith("Server is healthy");
    });
  });
});

