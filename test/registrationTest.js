const assert = require("chai").assert;
const userRegistration = require("../source/userRegistration");

describe("First Name validator ", function () {
  it("returns true if first name is valid", function () {
    assert.isTrue(userRegistration.nameValidator("Himanshu"));
  });
  it("returns false if first name is not valid", function () {
    assert.isFalse(userRegistration.nameValidator("himanshu"));
  });
  it("returns false if first name starts from number", function () {
    assert.isFalse(userRegistration.nameValidator("1Himanshu"));
  });
  it("returns false if first name starts with symbol", function () {
    assert.isFalse(userRegistration.nameValidator("@Himanshu"));
  });
});

describe("Last Name validator ", function () {
  it("returns true if last name is valid", function () {
    assert.isTrue(userRegistration.nameValidator("Gharat"));
  });
  it("returns false if last name is not valid", function () {
    assert.isFalse(userRegistration.nameValidator("gharat"));
  });
  it("returns false if last name starts from number", function () {
    assert.isFalse(userRegistration.nameValidator("1gharat"));
  });
  it("returns false if last name starts with symbol", function () {
    assert.isFalse(userRegistration.nameValidator("@Gharat"));
  });
});

describe("Email id validator ", function () {
    it("returns true if email id is valid", function () {
      assert.isTrue(userRegistration.emailValidator("himanshugharat3@gmail.com"));
    });
    it("returns false if email dont have @ symbol is not valid", function () {
      assert.isFalse(userRegistration.emailValidator("himanshugharat.com"));
    });
    it("returns false if email id dont have domain name", function () {
      assert.isFalse(userRegistration.emailValidator("himanshugharat@gmail"));
    });
    it("returns false if email id dont have @ and domain name", function () {
      assert.isFalse(userRegistration.emailValidator("himanshugharat"));
    });
  });
