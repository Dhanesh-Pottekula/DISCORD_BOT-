const {model} = require("../module/schema");
const shortid = require("shortid");

async function redirect(req,res){
    const shortUrl=req.params.id
    const obj= await model.findOne({shortUrl:shortUrl})
    console.log(obj.originalUrl);
    res.redirect(`http://`+obj.originalUrl);
}


module.exports={redirect};