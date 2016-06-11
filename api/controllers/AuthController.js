/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {
	


  /**
   * `AuthController.login()`
   */
  login: function (req, res) {
    return res.json({
      todo: 'login() is not implemented yet!'
    });
  },


  /**
   * `AuthController.process()`
   */
  process: function (req, res) {

     passport.authenticate('local', function(err, user, info) {

       if ((err) || (!user)) {
           return res.json({
               message: 'login failed'
           });
       }

       req.logIn(user, function(err) {
           if (err) res.json(err);
               return res.json({
                   message: 'login successful'
               });
           });

       })(req, res);

  },


  /**
   * `AuthController.logout()`
   */
  logout: function (req, res) {
    req.logout();
    return res.json({
      todo: 'logout() is not implemented yet!'
    });
  }
};

