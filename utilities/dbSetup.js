var dbModule = require("./db");

var flag= false;

let dbData=()=>{
    return dbModule().then((db)=>{
        if (db){
            db.collection("UserDetails").insertOne(
                {
                    name: "Rekha Narayanan",
                    emailid: "rekhs@abc.com",
                    password :8945228674,
                    bookings:{
                        shiftingFrom:"electronic city",
                        shiftingTo:"Madiwla",
                        shiftingType:""
                    }
                }
            ).then((result)=>{
                if(result.insertedCount>0){
                    flag = true;
                    console.log("User added successfully!!");
                }
                else{
                    flag= false;
                }
            })

            return db.collection("PackageDetails").insertMany([
                {
                    shiftType:"Home",
                    description:"Depending on BHK price varies=> 1BHK: 3000-6000, 2BHK: 5000-9000, 3BHK: 6000-10000, 4BHK:10000-15000"
                },
                {
                    shiftType:"Vehicle",
                    description:"Car/Bike, price within 10 km=> Bike: 4500, car:6500"
                }
            ]).then((result)=>{
                if((result.insertedCount>0) && flag){
                    console.log(flag,"+++++",result);
                    return true;
                }
                else{
                    return false;
                }
            })
        }
    })
}

module.exports = dbData;