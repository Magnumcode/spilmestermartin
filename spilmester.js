const Discord = require("discord.js");
const client = new Discord.Client();
var flip = 0;
var historie = Math.floor(Math.random() * 9) + 1;

client.on("ready", () => {
    console.log("klar min gut");
});

client.on("message", message => {
   
    //sender en tilfældig historie
    if (message.content == "!historie") {
        historie = Math.floor(Math.random() * 9) + 1;
        
    	if (historie == 1) {
            message.channel.send("Du står i window på mirage med en glock-18. en non ranked med AWP camper ned af mid. vælger du at peake eller at peake?");
        }
        
        if (historie == 2) {
            message.channel.send("du skal til at clutche i dust 2. En tyk 42 årig Russer råber i voicechat og siger at dit aim er lort. Vælger du at at skrige tilbage eller at skrige tilbage?");
        }
        
        if (historie == 3) {
            message.channel.send("din team m8 står AFK i spawn med bomben. Vælger at dræbe ham eller at dræbe ham?");
        }
        
        if (historie == 4) {
            message.channel.send("Du rusher long på dust 2 sammen med tech supporten fra indien. Han løber ud og dør direkte af en awp. Han råber i chatten \"herpediherpherpherp 4 on site with awp herpherpediherpherp\" Vil du tro på den usle inder?");
        }
        
        if (historie == 5) {
            message.channel.send("Du er ct og holder banana med en negev. Du sprayer som en sentry fra Team Fortress 2. En non-ranked wallhacker peaker og misser et skud. Men hvad wallhackeren ikke ved er at du også har wallhack. Vil du peake igen?");
        }
    
        if (historie == 6) {
            message.channel.send("Du skal spille en comp. Du er i en lobby med Nicolas A (den sindssyge glock-18 spiller som løber i midten af alting) og Lukas (ham der købte buttplugs for 70 €). Lukas har lavet lobbyen og vil gerne have dust 2 på. Du gider ikke at have dust 2 på fordi du har en speedygon dell som ikke kan trække dust 2. Lukas siger at han har fjernet Dust 2 og har sat Mirage på. Du accepterer kampen men finder ud af at det bliver Dust 2. Vil du vælge at leave kampen eller råbe \"Din fede autist! Dø i et hul!\" til Lukas?");
        
        }

	if (historie == 7) {
	    message.channel.send("det er klokken 7 om morgenen. Du har lige været til Lan hos Asbjørn til kl 2 om natten. Du vågner ved at Asbjørn skriver om nogen spille morgen comp. Du har ikke andet at lave så du ville selvfølgelig gerne. Asbjørn vælger agency og nuke som maps. Det har du ikke sagt ja til men han starter alligevel. Når du er logget ind på serveren hører du en lille russer dreng der råber BLYAT. måske den samme russer unge som du spillede med i går. Du køber negev og starter et global elite spray. Lige pludselig ser du den lille russer knægt hoppe ind foran skærmen. det næste du ser er et skilt hvor der står: 6 days 23 hours 59 minutes.");
	}
		
        if (historie == 8) {
	     message.channel.send("Du er lige logget ind i serveren. en af dine teammates taler kun tysk. vælger du at sige den magiske remse: sie bist bøsse und knalden mit dem tyr eller siger du heil Hitler?");
	 }
	
	if (historie == 9) {
	    message.channel.send("du er i comp med Alex. han køber to flash-bangs. Du vælger at gå palace og lige da du peaker misser Alex sin flash. Vil du vælge at skyde ham eller skyde ham?");
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

   if (message.content == "!modded") {
	message.channel.send("@everyone nogle anvifox nørder der er klar på noget modded");
   }
	
   if (message.content == "!wing") {
	message.channel.send("@everyone en enkelt knejt der kunne tage en wing");
   }

   if (message.content == "ahaa") {
        message.channel.send("billed billed billed billed billed https://www.monsterprint.dk/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/t/o/toilet2-dame-herre-sort.png")
   }
	
   if (message.content == "ok") {
	message.channel.send("talte du til mig?")
   }
});

client.login(process.env.BOT_TOKEN);
