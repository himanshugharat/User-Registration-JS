/*
 *Execution: default node cmd>node userRegistration.js
 *Purpose  : To validate the user registration
 *@files   : userRegistration.js
 *@overview: validate user registration 
 *@author  : Himanshu Gharat
 *@verson  : 1.0
 *@since   : 16-09-2020
 */

module.exports = {
  /**
   * @description: validate the name
   * @returns: true or false
   */
  nameValidator: function (name) {
    let regexConst = new RegExp(/^[A-Z][A-Za-z]{2,}/);
    return regexConst.test(name);
  },
  /**
   * @description: validate the emailid
   * @returns: true or false
   */
  emailValidator: function (email) {
    let regexConst = new RegExp(
      /^[0-9a-z]+[+_.-]?[0-9a-z]+[@][0-9a-z]+[.][a-z]{2,}[.]?[a-z]+$/
    );
    return regexConst.test(email);
  },
  /**
   * @description: validate the phone number
   * @returns: true or false
   */
  mobileNoValidator: function (number) {
    let regexConst = new RegExp(/^[0-9]{2}[ ][0-9]{10}/);
    return regexConst.test(number);
  },
  /**
   * @description: validate the password
   * @returns: true or false
   */
  passwordValidator: function (password) {
    let regexConst = new RegExp(
      /(?=.*[A-Z].*)(?=.*[0-9].*)([a-zA-Z0-9]{4,}[!@#$%^&*()_+][a-zA-Z0-9]{3,})/
    );
    return regexConst.test(password);
  },
};
