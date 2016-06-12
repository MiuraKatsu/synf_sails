/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    makeInsufficientFoodstuff:function(req,res){
        //console.log(req.user.owner);
        //console.log(req.body);

        Foodstuff.findOne(req.body.id).then(function(ret){
            console.log(ret);

            var dt = new Date();
            var year = dt.getFullYear();
            var month = dt.getMonth()+1;
            var date = dt.getDate();
            var order_date = year + "/" + month + "/" + date;


            InsufficientFoodstuff.create({
                foodstuff: ret.id,
                foodstuff_name: ret.name,
                category: ret.category,
                order_date: order_date,
                owner: req.user.owner
            }).then(function(ret){
                    console.log(ret);
                    InsufficientFoodstuff.find({owner:req.user.owner}).then(function(ret){
                        return res.json(ret);
                    });
            });
        });
    },

    dustInsufficientFoodstuff: function(req,res){
        console.log(req.user.owner);
        console.log(req.body);

        InsufficientFoodstuff.destroy({
                id:req.body.id,
                owner: req.user.owner
        }).then(function(ret){
                console.log(ret);
                InsufficientFoodstuff.find({owner:req.user.owner}).then(function(ret){
                    return res.json(ret);
                });
        });

    },

    boughtInsufficientFoodstuff: function(req,res) {
        console.log(req.user.owner);
        console.log(req.body);

        InsufficientFoodstuff.findOne(req.body.id).then(function(ret){
            console.log(ret);

            var foodstuff_id = ret.foodstuff;

            InsufficientFoodstuff.destroy({
                id:ret.id ,
                owner:req.user.owner
            }).then(function(ret){
                Foodstuff.findOne(foodstuff_id).then(function(ret){
                    console.log(ret);
                    InFridgeFoodstuff.create({
                        category:ret.category,
                        foodstuff: ret.id,
                        foodstuff_name: ret.name,
                        best_before_date: '',
                        owner: req.user.owner,
                    }).then(function(ret){
                        console.log(ret);
                        InsufficientFoodstuff.find({owner:req.user.owner}).then(function(ret){
                            return res.json(ret);
                        });
                    });
                });
            });
        });

        //InsufficientFoodstuff.destroy({
        //        id:req.body.id,
        //        owner: req.user.owner
        //}).then(function(ret){
        //        console.log(ret);
        //        InsufficientFoodstuff.find({owner:req.user.owner}).then(function(ret){
        //            return res.json(ret);
        //        });
        //});
    },

    increaseInFridgeFoodstuff: function(req,res){
        console.log(req.user.owner);
        console.log(req.body);

        Foodstuff.findOne(req.body.foodstuff_id).then(function(ret){
            console.log(ret);
            InFridgeFoodstuff.create({
                category:ret.category,
                foodstuff: ret.id,
                foodstuff_name: ret.name,
                best_before_date: '',
                owner: req.user.owner,
            }).then(function(ret){
                    console.log(ret);
                    InFridgeFoodstuff.find({owner:req.user.owner}).then(function(ret){
                        return res.json(ret);
                    });
            });
        });

    },

    decreaseInFridgeFoodstuff: function(rew,res){
        console.log(req.user.owner);
        console.log(req.body);
            //InFridgeFoodstuff.destory({
            //}).then(function(ret){
            //        console.log(ret);
            //        InFridgeFoodstuff.find({owner:req.user.owner}).then(function(ret){
            //            return res.json(ret);
            //        });
            //});

    },
};

