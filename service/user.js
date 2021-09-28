const userDB = require('../Model/dbModule');

user={}


user.orderFood =(details,next)=>{
    return userDB.orderFood(details).then(res=>{
        if (res){
            return true;
        }
    }).catch(err=>{
        throw err;
    })
}

user.getOrders =(next)=>{
    return userDB.getOrders().then(res=>{
        if (res){
            return res;
        }
    }).catch(err=>{
        throw err;
    })
}

module.exports = user;