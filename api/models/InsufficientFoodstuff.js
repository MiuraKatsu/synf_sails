/**
 * Insufficient_foodstuff.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'insufficient_foodstuff',
  attributes: {

    category: {
        type: 'int'
    },
    foodstuff: {
        type: 'int'
    },
    foodstuff_name: {
        type: 'string'
    },
    order_date: {
        type: 'date'
    },

    owner: {
      model: 'family'
    }

  },

};

