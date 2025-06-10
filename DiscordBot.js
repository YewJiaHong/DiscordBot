/* 
To start the bot:
  node DiscordBot.js
or
  node .
 */

//to get the discord bot token from config.json
const {Client, Events, GatewayIntentBits} = require('discord.js')
const { token } = require('./config.json');  

//note: guild = dc server
const client = new Client({intents: [GatewayIntentBits.Guilds]});

client.once(Events.ClientReady, readyClient=>{
    console.log(`Ready!! Logged in as ${readyClient.user.tag}`);
});

client.login(token);


