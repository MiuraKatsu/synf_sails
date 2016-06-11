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
    },

    getNewFlag: function(){
        var orderDate = new Date(this.order_date);
        var nowDate = new Date();
        console.log(orderDate);
        console.log(nowDate);
        var nowMSec = nowDate.getMilliseconds();
        var orderMSec = orderDate.getMilliseconds();
        console.log(nowMSec - orderMSec);
        //1000 * 60 * 60 * 24
        if( (nowMSec - orderMSec) < 1000 * 60 * 60 * 24){
            return 1;
        }else{
            return 0;
        };
    },

    toJSON: function() {
       var obj = this.toObject();
       obj.new_flag = this.getNewFlag();
       return obj;
    },
  },

};

