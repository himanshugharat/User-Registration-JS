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

describe("Phone Number validator ", function () {
  it("returns true if phone number is valid", function () {
    assert.isTrue(userRegistration.mobileNoValidator("91 8879112321"));
  });
  it("returns false if phone number contains symbol ", function () {
    assert.isFalse(userRegistration.mobileNoValidator("91@8879112321"));
  });
  it("returns false if phone number dont have space between code and number", function () {
    assert.isFalse(userRegistration.mobileNoValidator("919619326117"));
  });
  it("returns false if phone number has letters or symbols in it", function () {
    assert.isFalse(userRegistration.mobileNoValidator("12345556Q22ee"));
  });
  it("returns false if phone number is more than 10 digit", function () {
    assert.isFalse(userRegistration.mobileNoValidator("911 887911202111"));
  });
  it("returns false if phone number is less than 10 digit", function () {
    assert.isFalse(userRegistration.mobileNoValidator("91 887911"));
  });
});

describe("Password validator ", function () {
  it("returns true if password is valid", function () {
    assert.isTrue(userRegistration.passwordValidator("Qwsdefnfq"));
  });
  it("returns false if password is less than 8 chars", function () {
    assert.isFalse(userRegistration.emailValidator("hehdc"));
  });
  it("returns false if password contains no upper case but 8 char long ", function () {
    assert.isFalse(userRegistration.emailValidator("qwertyuio"));
  });
});
