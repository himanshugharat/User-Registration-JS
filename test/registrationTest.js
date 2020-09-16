const assert = require("chai").assert;
const userRegistration = require("../source/userRegistration");

describe("Name validator ", function () {
  it("returns true if name is valid", function () {
    assert.isTrue(userRegistration("Himanshu"));
  });
  it("returns false if name is not valid", function () {
    assert.isFalse(userRegistration("himanshu"));
  });
  it("returns false if name starts from number", function () {
    assert.isFalse(userRegistration("1Himanshu"));
  });
  it("returns false if name starts with symbol", function () {
    assert.isFalse(userRegistration("@Himanshu"));
  });
});
