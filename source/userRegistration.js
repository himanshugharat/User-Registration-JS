module.exports = {
  nameValidator: function (name) {
    let regexConst = new RegExp(/^[A-Z][A-Za-z]{2,}/);
    return regexConst.test(name);
  },
  emailValidator: function (email) {
    let regexConst = new RegExp(
      /^[0-9a-z]+[+_.-]?[0-9a-z]+[@][0-9a-z]+[.][a-z]{2,}[.]?[a-z]+$/
    );
    return regexConst.test(email);
  },
  mobileNoValidator: function (number) {
    let regexConst = new RegExp(/^[0-9]{2}[ ][0-9]{10}/);
    return regexConst.test(number);
  },
  passwordValidator: function (password) {
    let regexConst = new RegExp(/(?=.*[A-Z].*)[A-Za-z0-9]{8,}/);
    return regexConst.test(password);
  },
};
