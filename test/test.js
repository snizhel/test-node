const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;

chai.use(chaiHttp);
// describe("Array", function () {
//   describe("#indexOf()", function () {
//     it("should return -1 when the value is not present", function () {
//       //   assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

describe("cal api", function () {
  describe("add", () => {
    it("2+3=5", () => {
      chai
        .request("http://0.0.0.0:8080")
        .get("/test?op=add&a=2&b=3")
        .end((err, res) => {
          expect(res["r"]).to.equal(5);
        });
    });
  });
});
