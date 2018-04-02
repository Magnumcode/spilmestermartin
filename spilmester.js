const discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("er i klar!!!");
});

client.on("message", (message) => {
  if (message.content.startsWith("!historie")) {
    message.channel.send("Jeg er under om programering aldrig brug commando til discord.js");
  } else
  
  if (message.content.startsWith("!comp")) {
      message.channel.send("Jeg er under om programering aldrig brug commando til discord.js");
  }
  
});

client.login(process.env.BOT_TOKEN);
