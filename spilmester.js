//const commando = require("discord.js-commando");
//const client = new commando.Client({
//    owner: '308479121489657857'
//});

//client.registry.registerGroup("spille", "Spille");
//client.registry.registerDefaults();
//client.registry.registerCommandsIn(__dirname + "/commands");

const Discord = require('discord.js-commando');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.login(process.env.BOT_TOKEN);
