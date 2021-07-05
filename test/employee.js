//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
var request = require("request");
const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;
chai.use(chaiHttp);
let { result } = require("../helpers/result");

/*
 * Test the /GET route
 */

describe("/GET getEmployeesDepartments", () => {
  it("it should GET all the employees with department", (done) => {
    request(
      "http://localhost:3015/getEmployeesDepartments",
      (error, response, body) => {
        console.log(response);

        expect(response.statusCode).to.equal(200);
        expect(body).should.be.a("object");
        assert.equal(response.body, JSON.stringify(result));
        done();
      }
    );
  });
});
