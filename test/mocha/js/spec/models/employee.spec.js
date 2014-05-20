/**
 * A simple "hello world" test file (with no app dependencies yet).
 */
 /*
define([], function () {
  describe("My Test Suite", function () {
    it("should be true", function () {
      expect(true).to.be.true;
    });

    it("should be false", function () {
      expect(false).to.be.false;
    });
  });
});
*/
define(["app/models/employee"], function(EmployeeModel) {

	describe("app/models/employee", function() {
		it("should have defaults", function() {
			var employee = new EmployeeModel();
			expect(employee.get("position")).to.equal("Customer Service");
		});
		it("should stub get", function() {
			var stub = sinon.stub(EmployeeModel.prototype, "get", function() {
				return "HI!!!!";
			})
			var employee = new EmployeeModel();
			expect(employee.get("position")).to.equal("HI!!!!");
			stub.restore();
		});
	});
});