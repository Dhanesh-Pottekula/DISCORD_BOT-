const {mongoose}=require("./connection");
const express=require("express");
const app=express()
const {shortUrl}=require("./shorturl");
const {redirect}=require("./route/redirect") 
const { Client, GatewayIntentBits } =require('discord.js');

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
],});

client.on("interactionCreate",(interaction)=>{
console.log(interaction);
interaction.reply("pong");
})
client.on("messageCreate",(message)=>{
    if(message.author.bot) return 
    else if(message.content.startsWith("create")){
        const url=message.content.split("create ")[1];
        message.reply({
            content:` generating short ID for ${url}`
        });

        shortUrl(url,message);
    }
    else{console.log(message.content);
        message.reply({
            content:"hi from Bot"
        });
    }
    
});

app.use("/:id",redirect);
const port =3007;
client.login("MTE2OTIwNzAwOTYzNjI2NjAyNg.GXMyEG.OgCVcFSRUKxiNi2z1mLmEzA7um8JatohCtV5FE");
app.listen(port,()=>{console.log(`server listening on ${port}`)})
