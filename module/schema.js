const mongoose=require("mongoose");

const schema=mongoose.Schema({
    shortUrl:{
        type:String,
        required:true,
    },
    originalUrl:{
        type:String,
        required:true
    },
});

const model=mongoose.model("urlModel",schema);

module.exports={model}