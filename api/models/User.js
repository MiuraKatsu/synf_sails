/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');  
module.exports = {

  attributes: {

      first_name:{
          type: 'string'
      },
      last_name:{
          type: 'string'
      },
      username: {
          type: 'string'
      },
      password: {
          type: 'string'
      },

      owner: {
          model: 'family',
      },

      toJSON: function() {
          //console.log("toJson");
          var obj = this.toObject();
          delete obj.password;
          return obj;
      },
  },
  beforeUpdate: function(user, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    console.log(err);
                    cb(err);
                }else{
                    user.password = hash;
                    cb(null, user);
                }
            });
        });
    }
};

