var db = require("../utilities/dbSetup");

var user = require("../service/user");

var express = require("express");
var router = express.Router();

// router.get("/setupdb",(req,res)=>{
//     db().then(result=>{
//         console.log(result);
//         if (result){
//             res.json({"message": "insertion successfull"});
//         }
//         else{
//             res.json({"message":"insertion failed."})
//         }
//     })
// })


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


router.all('/*',(req,res,next)=>{
    res.send({"message": "invalid request"})
})

module.exports = router;