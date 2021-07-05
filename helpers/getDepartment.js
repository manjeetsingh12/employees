exports.getDepartment = (deptID) => {
  if (deptID > 5) {
    return Promise.reject("Employee Dept not found.");
  }
  const employeeIdMapping = {
    1: "SALES",
    2: "HR",
    3: "MARKETING",
    4: "IT",
    5: "SUPPORT",
  };
  return Promise.resolve(employeeIdMapping[deptID]);
};
