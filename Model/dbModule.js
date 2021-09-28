var dbConnection = require("../utilities/db");


let dbmodule={};


dbmodule.orderFood= (details)=>{
    return dbConnection().then((db)=>{
        if(db){
            return db.collection("OrderedFood").insertOne(details).then(result=>{
                if (result.insertedCount>0){
                    return true;
                }
                else{
                    let err = new Error("Unable to place order. Please try again");
                    err.status=400;
                    throw err;
                }
            })
        }
    })
}

dbmodule.getOrders= (details)=>{
    return dbConnection().then((db)=>{
        if(db){
            return db.collection("OrderedFood").find().project({_id:0}).toArray().then(result=>{
                if (result.length>0){
                    return result;
                }
                else{
                    let err = new Error("No Orders Found!");
                    err.status=400;
                    throw err;
                }
            })
        }
    })
}




module.exports = dbmodule;