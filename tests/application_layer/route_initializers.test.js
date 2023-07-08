const GenerateResumeRouteController = require('../../src/routes/generate_pdf_route_controller');
const InitializeRoutes=require("../../src/core/intialize_routes");

describe('InitializeRoutes', () => {
  describe("Initialize",()=>{
    test('should add routes to the app', async () => {
      const app = {
        use: jest.fn()
      };
      const link = '/example-link';
      const routeController = new GenerateResumeRouteController(link);
  
      await InitializeRoutes.Initialize(app, link);
  
      expect(app.use).toHaveBeenCalledWith('/', expect.any(Function));
    });
  })
  
  describe("getRoutes",()=>{
    test('should return an array of route controllers', async () => {
      const link = '/example-link';
  
      const routes = await InitializeRoutes.getRoutes(link);
  
      expect(routes).toBeInstanceOf(Array);
      expect(routes.length).toBe(1);
      expect(routes[0]).toBeInstanceOf(GenerateResumeRouteController);
    });
  })
  
});




