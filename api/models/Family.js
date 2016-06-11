/**
 * Family.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      name: {
          type: 'string'
      },

      user: {
          collection: 'user',
          via: 'owner'
      },

      fridge: {
          collection: 'fridge',
          via: 'owner'
      },
      insufficient_foodstuff: {
          collection: 'insufficientFoodstuff',
          via: 'owner'
      }



  }
};

