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

  async InitializeController(link,checkHeaders) {
    await this.InitializePost(checkHeaders);
  }

  async runService(req, res) {
    res.send(`runService Method for ${this.path} does not exist!`);
  }

  async InitializePost(checkHeaders) {
    if(checkHeaders!==undefined)
    this.router.post(this.path,checkHeaders, this.runService.bind(this));
    else 
    this.router.post(this.path, this.runService.bind(this));
  }
}

module.exports = AbstractRouteController;
