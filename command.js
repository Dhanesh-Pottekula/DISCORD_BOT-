const { REST, Routes }= require('discord.js');


const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];
  
  const rest = new REST({ version: '10' }).setToken("MTE2OTIwNzAwOTYzNjI2NjAyNg.GXMyEG.OgCVcFSRUKxiNi2z1mLmEzA7um8JatohCtV5FE");

(async ()=>{try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("1169207009636266026"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }})();
  