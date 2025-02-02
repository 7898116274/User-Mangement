const mongoose = require("mongoose")

require('dotenv').config()

const URL = process.env.MONGOOSE_URL

const connectDatabase = ()=>{
    mongoose.connect(URL).then(()=>{
        console.log("Connection Successful")
    }).catch((error)=>
    console.log("error",error.message)
    );
}


module.exports = connectDatabase;