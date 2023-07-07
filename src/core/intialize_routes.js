const HelloWorldRouteController = require('../routes/generate_pdf_route_controller');

class InitializeRoutes {
  static async Initialize(app, link) {
    let routes = await this.getRoutes(link);
    routes.forEach(rc => {
      app.use("/", rc.router);
    });
  }

  static async getRoutes(link) {
    let routes = [];
    routes.push(new HelloWorldRouteController(link));
    return Promise.resolve(routes);
  }
}

module.exports = InitializeRoutes;
