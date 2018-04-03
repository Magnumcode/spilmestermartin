const Discord = require('discord.js');
const client = new Discord.Client();
var historie = Math.floor(Math.random() * 3) + 1;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!historie') {
    	message.reply('Under omprogramering');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
