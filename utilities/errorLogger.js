var fs = require("fs");


var logger = (err, req,res, next)=>{
    if(err){
        fs.appendFile('ErrorLogger.txt', err.stack + "\n",(err)=>{
            if(err){
                console.log("error logging failed");
            }
        });
        res.status(500);
        res.json({"message":err.message})
    }
    next();
}

module.exports= logger;