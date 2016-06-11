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
        console.log(req.body);

        sails.models['user'].findOne(req.body).then(function(ret){
            return res.json(ret);
        });
    }



};
