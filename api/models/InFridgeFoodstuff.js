/**
 * Foodstuff.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'in_fridge_foodstuff',
  attributes: {

      name: {
          type: 'string'
      },
      category_code:{
          type: 'string'
      },
      best_befoe_date: {
          type: 'date'
      },
      count: {
          type: 'int'
      },

      owner: {
          model: 'fridge'
      }
  }
};

