class HelloWorld {
    static async wishHello() {
      let resp = 'Hello World';
      return Promise.resolve(resp);
    }
  }
  
  module.exports = HelloWorld;
  