const Discord = require("discord.js");
const client = new Discord.Client();
var historie = Math.floor(Math.random() * 3) + 1;

client.on("ready", () => {
    console.log("klar min gut");
});

client.on("message", message => {
   
    //sender en tilfældig historie
    if (message.content == "!historie") {
        historie = Math.floor(Math.random() * 6) + 1;
        
    	if (historie == 1) {
            message.channel.send("@everyone Du står i window på mirage med en glock-18. en non ranked med AWP camper ned af mid. vælger du at peake eller at peake?");
        }
        
        if (historie == 2) {
            message.channel.send("@everyone du skal til at clutche i dust 2. En tyk 42 årig Russer råber i voicechat og siger at dit aim er lort. Vælger du at at skrige tilbage eller at skrige tilbage?");
        }
        
        if (historie == 3) {
            message.channel.send("@everyone din team m8 står AFK i spawn med bomben. Vælger at dræbe ham eller at dræbe ham?");
        }
        
        if (historie == 4) {
            message.channel.send("@everyone Du rusher long på dust 2 sammen med tech supporten fra indien. Han løber ud og dør direkte af en awp. Han råber i chatten \"herpediherpherpherp 4 on site with awp herpherpediherpherp\" Vil du tro på den usle inder?");
        }
        
        if (historie == 5) {
            message.channel.send("@everyone Du er ct og holder banana med en negev. Du sprayer som en sentry fra Team Fortress 2. En non-ranked wallhacker peaker og misser et skud. Men hvad wallhackeren ikke ved er at du også har wallhack. Vil du peake igen?");
        }
    
        if (historie == 6) {
            message.channel.send("@everyone Du skal spille en comp. Du er i en lobby med Nicolas A (den sindssyge glock-18 spiller som løber i midten af alting) og Lukas (ham der købte buttplugs for 70 €). Lukas har lavet lobbyen og vil gerne have dust 2 på. Du gider ikke at have dust 2 på fordi du har en speedygon dell som ikke kan trække dust 2. Lukas siger at han har fjernet Dust 2 og har sat Mirage på. Du accepterer kampen men finder ud af at det bliver Dust 2. Vil du vælge at leave kampen eller råbe \"Din fede autist! Dø i et hul!\" til Lukas?");
        }
  	}
   
   //sender en besked til hele serveren og spørger om der er nogen der vil spille comp med en tilfældig besked
   if (message.content == "!comp") {
       historie = Math.floor(Math.random() * 3) + 1;            
       
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
   
   if (message.content == "!hjælp") {
       message.reply("!historie: skriver en tilfældig historie")
       message.channel.send("!comp: spørger hele serveren om der er nogle der vil spille")	
   }
});

client.login(process.env.BOT_TOKEN);
