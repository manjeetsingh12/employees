const { getEmployees } = require("../helpers/getEmployees");
const { getDepartment } = require("../helpers/getDepartment");
class EmployeeService {
  constructor() {}
  async getEmployeeWithDepartments() {
    try {
      let employeesData = await getEmployees();
      let arr = [];
      employeesData.forEach((data) => {
        arr.push(getDepartment(data["dept"]));
      });
      await Promise.allSettled(arr).then((results) => {
        results.map((data, key) => {
          let { status, value } = data;
          if (status == "fulfilled") employeesData[key]["dept"] = value;
          else employeesData[key]["dept"] = "NA";
        });
      });
      return employeesData;
    } catch (err) {
      console.log(err);
    }
  }
}
exports.EmployeeService = EmployeeService;
