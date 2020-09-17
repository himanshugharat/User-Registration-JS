const assert = require("chai").assert;
const userRegistration = require("../source/userRegistration");

describe("First Name validator", function () {
  it("given first name if valid then should returns true", function () {
    assert.isTrue(userRegistration.nameValidator("Himanshu"));
  });
  it("given first name if not valid then should returns false", function () {
    assert.isFalse(userRegistration.nameValidator("himanshu"));
  });
  it("given first name if starts with number then should returns false", function () {
    assert.isFalse(userRegistration.nameValidator("1Himanshu"));
  });
  it("given first name if contains symbols then should returns false", function () {
    assert.isFalse(userRegistration.nameValidator("@Himanshu"));
  });
  it("given first name if null then should returns false", function () {
    assert.isFalse(userRegistration.nameValidator(null));
  });
  it("given first name if undifined then should returns false", function () {
    assert.isFalse(userRegistration.nameValidator(undefined));
  });
});

describe("Last Name validator ", function () {
  it("given last name if valid then should returns true", function () {
    assert.isTrue(userRegistration.nameValidator("Gharat"));
  });
  it("given last name if not starts with uppercase then should returns false", function () {
    assert.isFalse(userRegistration.nameValidator("gharat"));
  });
  it("given last name if contains number then should returns false", function () {
    assert.isFalse(userRegistration.nameValidator("1gharat"));
  });
  it("given last name if contains symbol then should return false", function () {
    assert.isFalse(userRegistration.nameValidator("@Gharat"));
  });
  it("given last name if null then should returns false", function () {
    assert.isFalse(userRegistration.nameValidator(null));
  });
  it("given last name if undifined then should returns false", function () {
    assert.isFalse(userRegistration.nameValidator(undefined));
  });
});

describe("Email id validator ", function () {
  it("given email id if valid then should returns true", function () {
    assert.isTrue(userRegistration.emailValidator("himanshugharat3@gmail.com"));
  });
  it("given email id if does not contain @ then should returns false", function () {
    assert.isFalse(userRegistration.emailValidator("himanshugharat.com"));
  });
  it("given email id if does not contains domain name then should returns false", function () {
    assert.isFalse(userRegistration.emailValidator("himanshugharat@gmail"));
  });
  it("given email id if does not contains domain name and @ then should returns false", function () {
    assert.isFalse(userRegistration.emailValidator("himanshugharat"));
  });
  it("given email id if null then should returns false", function () {
    assert.isFalse(userRegistration.emailValidator(null));
  });
  it("given email id if undifined then should returns false", function () {
    assert.isFalse(userRegistration.emailValidator(undefined));
  });
});

describe("Phone Number validator ", function () {
  it("given phone number if valid then should return true", function () {
    assert.isTrue(userRegistration.mobileNoValidator("91 8879112321"));
  });
  it("given phone number if contains symbols then should return false", function () {
    assert.isFalse(userRegistration.mobileNoValidator("91@8879112321"));
  });
  it("given phone number if does not contains space then should return false", function () {
    assert.isFalse(userRegistration.mobileNoValidator("919619326117"));
  });
  it("given phone number if contains letters then should return false", function () {
    assert.isFalse(userRegistration.mobileNoValidator("12345556Q22ee"));
  });
  it("given phone number if contains phone number more than 10 digits then should return false", function () {
    assert.isFalse(userRegistration.mobileNoValidator("911 887911202111"));
  });
  it("given phone number if contains phone number less than 10 digits then should return false", function () {
    assert.isFalse(userRegistration.mobileNoValidator("91 887911"));
  });
  it("given phone number if null then should returns false", function () {
    assert.isFalse(userRegistration.mobileNoValidator(null));
  });
  it("given phone number name if undifined then should returns false", function () {
    assert.isFalse(userRegistration.mobileNoValidator(undefined));
  });
});

describe("Password validator ", function () {
  it("given password if valid then should return true", function () {
    assert.isTrue(userRegistration.passwordValidator("Qwsdefq@123"));
  });
  it("given password if less than 8 char then should return false", function () {
    assert.isFalse(userRegistration.passwordValidator("hehdc"));
  });
  it("given password if no uppercase but 8 char long then should return false ", function () {
    assert.isFalse(userRegistration.passwordValidator("qwertyuio"));
  });
  it("given password if no digit but has uppercase and 8 char long then should return false ", function () {
    assert.isFalse(userRegistration.passwordValidator("Qwertyuio"));
  });
  it("given password if no symbol but has digit, uppercase and 8 char long then should return false ", function () {
    assert.isFalse(userRegistration.passwordValidator("Qwertyuio12"));
  });
  it("given password if null then should returns false", function () {
    assert.isFalse(userRegistration.passwordValidator(null));
  });
  it("given password if undifined then should returns false", function () {
    assert.isFalse(userRegistration.passwordValidator(undefined));
  });
});
