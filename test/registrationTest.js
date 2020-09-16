const assert = require("chai").assert;
const userRegistration = require("../source/userRegistration");

describe("First Name validator ", function () {
  it("returns true if first name is valid", function () {
    assert.isTrue(userRegistration("Himanshu"));
  });
  it("returns false if first name is not valid", function () {
    assert.isFalse(userRegistration("himanshu"));
  });
  it("returns false if first name starts from number", function () {
    assert.isFalse(userRegistration("1Himanshu"));
  });
  it("returns false if first name starts with symbol", function () {
    assert.isFalse(userRegistration("@Himanshu"));
  });
});

describe("Last Name validator ", function () {
  it("returns true if last name is valid", function () {
    assert.isTrue(userRegistration("Gharat"));
  });
  it("returns false if last name is not valid", function () {
    assert.isFalse(userRegistration("gharat"));
  });
  it("returns false if last name starts from number", function () {
    assert.isFalse(userRegistration("1gharat"));
  });
  it("returns false if last name starts with symbol", function () {
    assert.isFalse(userRegistration("@Gharat"));
  });
});
