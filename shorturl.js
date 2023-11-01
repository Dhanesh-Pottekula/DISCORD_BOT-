
const {model} = require("./module/schema");
const shortid=require("shortid");

async function shortUrl(url,message){
    const shortUrl=shortid();
    if(!url)return message.reply({content:"enter url"});
    else
    {model.create({
        shortUrl,
        originalUrl:url,
    });
    message.reply({content:`http://localhost:3007/${shortUrl}`})
}}


module.exports={shortUrl}