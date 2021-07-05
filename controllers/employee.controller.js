const { ErrorHandler } = require("../helpers/error");
const express = require("express");
const { EmployeeService } = require("../services/employee.service");
const EmployeeServices = new EmployeeService();

class EmployeeController {
  constructor() {
    this.path = "";
    this.router = express.Router();
    this.initRoutes();
  }
  initRoutes() {
    this.router.get(
      "/getEmployeesDepartments",
      this.getEmployeeWithDepartments
    );
  }
  async getEmployeeWithDepartments(req, res, next) {
    try {
      let employeeData = await EmployeeServices.getEmployeeWithDepartments();
      res.status(200).json(employeeData);
    } catch (error) {
      next(new ErrorHandler(400, "Somthing went wrong", error));
    }
  }
}

exports.EmployeeController = EmployeeController;
