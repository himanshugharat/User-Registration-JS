module.exports = {
  nameValidator: function (name) {
    let regexConst = new RegExp(/^[A-Z][A-Za-z]{2,}/);
    return regexConst.test(name);
  },
  emailValidator: function(email){
    let regexConst = new RegExp(/^[0-9a-z]+[+_.-]?[0-9a-z]+[@][0-9a-z]+[.][a-z]{2,}[.]?[a-z]+$/);
    return regexConst.test(email);
  }
};
