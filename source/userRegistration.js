module.exports = function (name) {
  let regexConst = new RegExp(/^[A-Z][A-Za-z]{2,}/);
  return regexConst.test(name);
};
