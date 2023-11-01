const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/bot")
.then(()=>{console.log("mongo connected")})
.catch(()=>{console.log("mongo not connected")});



module.exports={mongoose};