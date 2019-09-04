const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const fs = require("fs");

const prefix = botSettings.prefix;

const bot = new Discord.Client();

bot.on("ready", () => {

    //sets the status, aka "now playing", of the bot 
    bot.user.setPresence({
        game: {
            name: "you",
            type: 'PLAYING'
        },
        status: 'online'
    })
})

bot.on("ready", async () => {

    console.log(bot.user.username + ' initiated...');

    //GENERATES BOT INV LINK IN CMD PROMPT WHEN RUN
    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link); 
    }
    catch (e) { //error object is e 
        console.log(e.stack);
    }
});

bot.login(botSettings.token);