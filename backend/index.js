const express = require("express")
const cors = require("cors")
const connectDatabase = require("./db/db");
const userrouter = require("./route/userRouter");
const moment = require("moment")
require('dotenv').config()



const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userrouter);



app.listen(process.env.PORT,process.env.HOST,()=>{
    connectDatabase();
    const now = moment().format('YYYY-MM-DD HH:MM:SS');
    console.log(`Server is running on ${process.env.HOST}:${process.env.PORT} at ${now}`);
})
