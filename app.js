const express = require("express");
const mongoose = require("mongoose");

module.exports = class App {
  constructor(appInit) {
    this.app = express();
    this.port = appInit.port;
    this.initDatabase();
    this.middleWare(appInit.middleWares);
    this.assets();
    this.routes(appInit.controllers);
    this.errorHandler(appInit.errorHandlers);
  }

  middleWare(middleWares) {
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare);
    });
  }
  assets() {
    this.app.use(express.static("public"));
  }

  routes(controllers) {
    controllers.forEach((controller) => {
      this.app.use(controller.path, controller.router);
    });
  }

  errorHandler(errorHandlers) {
    errorHandlers.forEach((errorHandler) => {
      this.app.use(errorHandler);
    });
  }

  initDatabase() {
    //    mongo connection
    mongoose
      .connect(process.env.mongo_url + process.env.CLASS, {
        useNewUrlParser: true,
      })
      .then(() => {
        console.log("Connected to mongodb: " + process.env.CLASS);
      })
      .catch((err) => console.log("Error: " + err));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`);
    });
  }
};
