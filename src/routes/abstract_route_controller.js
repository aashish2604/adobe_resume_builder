const express = require("express");

class AbstractRouteController {
    router;
    path;
  constructor() {
    if (new.target === AbstractRouteController) {
        throw new TypeError("Cannot instantiate abstract class");
    }
    this.router = express.Router();
  }

  async InitializeController(link) {
    console.log(link + this.path);
    await this.InitializeGet();
    await this.InitializePost();
  }

  async runService(req, resp) {
    resp.send(`runService Method for ${this.path} does not exist!`);
  }

  async InitializeGet() {
    this.router.get(this.path, this.runService.bind(this));
  }

  async InitializePost() {
    this.router.post(this.path, this.runService.bind(this));
  }
}

module.exports = AbstractRouteController;
