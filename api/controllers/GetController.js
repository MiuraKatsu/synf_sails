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
        //
        
        total_ret = [];
        var findInFridge = function(rec,index){
        //function findInFridge(rec,index,array){
            //console.log(rec);
            //inFridgeFoodstuff.find({owner:req.user.owner,category:rec.id}).then(function(ret){
            var query_str = 'select foodstuff,foodstuff_name,count(id) as count,max(best_before_date) as best_before_date '
                          + ' from in_fridge_foodstuff '
                          + ' where owner ='+req.user.owner+' and category = '+req.body.category+' and foodstuff = '+rec.id
                          + ' group by foodstuff ';

            sails.models['infridgefoodstuff'].query(query_str,function(err,ret){
                //console.log(err);
                console.log(ret);
                total_ret[index].ret;
            });
        };

        Foodstuff.find({category:req.body.category}).then(function(ret){
            console.log(ret);
            //return res.json(ret.map(findInFridge));
            var ret_map = ret.map(findInFridge);
            //console.log(ret_map);
            //ret.forEach(findInFridge):
            return res.json(total_ret);
        });
    },


};
