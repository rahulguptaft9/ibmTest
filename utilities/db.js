const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;


const connection = () =>{
    return mongoClient.connect("mongodb://localhost:27017/foodie").then((client)=>{
        console.log("mongo server connected.");
        return client.db();
    }).catch(err=>{
        console.log(err);
    })
}

module.exports = connection;