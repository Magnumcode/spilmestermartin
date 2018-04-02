const commando = require("discord.js-commando");
const client = new commando.Client({
    owner: '308479121489657857'
});

client.registry.registerGroup("spille", "Spille");
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

client.login(process.env.BOT_TOKEN);
