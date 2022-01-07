//anommeghasoumavohack3
//mongodb+srv://megha:<password>@cluster0.lqkqs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const mongoose = require("mongoose")
require("dotenv").config()
const DB = process.env.DB_URI;
mongoose.connect(DB,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(()=>{
    console.log("connection is done")
}).catch((err)=>{
     console.log("connection failed")
})
