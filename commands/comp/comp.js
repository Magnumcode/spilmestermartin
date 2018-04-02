const commando = require("discord.js-commando");

class CompCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: "comp",
			group: "spille",
			memberName: "comp",
			description: "spørger om der er nogen der vil spille en comp"
		});
	}

	async run(message, args) {
		var historie = Math.floor(Math.random() * 3) + 1;

		if (historie == 1) {
			message.channel.send("@everyone nogen trolde eller elvere der vil tage en comp?");
		}

		if (historie == 2) {
			message.channel.send("@everyone nogen barda nørder der er klar til en comp?");
		}

		if (historie == 3) {
			message.channel.send("@everyone er der nogle friske fyre på linjen der kunne tage en comp?");
		}
	}
}

module.exports = CompCommand;