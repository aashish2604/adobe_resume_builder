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

  async InitializeController(link,checkHeaders,type) {
    if(type=='post')
    await this.InitializePost(checkHeaders);
    else
    await this.InitializeGet(checkHeaders);
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
  async InitializeGet(checkHeaders) {
    if(checkHeaders!==undefined)
    this.router.get(this.path,checkHeaders, this.runService.bind(this));
    else 
    this.router.get(this.path, this.runService.bind(this));
  }
}

module.exports = AbstractRouteController;
