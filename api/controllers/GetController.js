/**
 * GetController
 *
 * @description :: Server-side logic for default json get
 */

module.exports = {

//    post_data:function(req,res){
//
//        action = req.body['action'];
//
//        var find = function(clsName){
//            return new Promise(function(resolve){
//                sails.models[clsName].find().then(function(res){
//                    resolve(res);
//                });
//            });
//        };
//
//        Promise.all(action.map(find))
//                .then(function(reses){
//                    return res.json(reses);
//                });
//    },


    user:function(req,res){
        console.log(req);
        user_id = req.session.passport.user;

        sails.models['user'].findOne(user_id).then(function(ret){
            return res.json(ret);
        });
    },

    kitchen: function(req,res){
        //console.log(req.user.owner);

        total_ret = {};
        FoodstuffCategory.find().then(function(ret){
            total_ret.FoodstuffCategory = ret;
            InsufficientFoodstuff.find({owner: req.user.owner}).then(function(ret){
                total_ret.InsufficientFoodstuff = ret;
                return res.json(total_ret);
            });
        });

    },

    inFridgeFoodstuff: function(req,res){
        //console.log(req.user.owner);
    }

};
