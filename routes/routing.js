var user = require("../service/user");

var express = require("express");
var router = express.Router();


router.post('/order-food', (req,res,next)=>{
    user.orderFood(req.body).then(resp=>{
        if(resp){
            res.send({"message": "Order placed successfully!!"})
        }
    }).catch(err=>{
        next(err)
    })
})


router.get('/get-orders', (req,res,next)=>{
    user.getOrders().then(resp=>{
        if(resp){
            res.send(resp)
        }
    }).catch(err=>{
        next(err)
    })
})

router.get('/get-completed-orders', (req,res,next)=>{
    user.getCompletedOrders().then(resp=>{
        if(resp){
            res.send(resp)
        }
    }).catch(err=>{
        next(err)
    })
})


router.all('/*',(req,res,next)=>{
    res.send({"message": "invalid request"})
})

module.exports = router;