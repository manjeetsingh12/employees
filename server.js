const express = require("express");
require("dotenv/config");

var App = require("./app");
const { loggerMiddleware } = require("./middlewares/logger");
const { errorHandler, invalidAPI } = require("./middlewares/error-handler");
const { EmployeeController } = require("./controllers/employee.controller");
const app = new App({
  port: parseInt(process.env.PORT) || 3010,
  middleWares: [
    express.json({ limit: "50mb" }),
    express.urlencoded({
      limit: "50mb",
      extended: true,
    }),
    loggerMiddleware,
  ],
  controllers: [new EmployeeController()],
  errorHandlers: [invalidAPI, errorHandler],
});

app.listen();
