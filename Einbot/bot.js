const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const fs = require("fs");
const mysql = require("mysql");

const prefix = botSettings.prefix;

const bot = new Discord.Client();
bot.commands = new Discord.Collection();


//utility
fs.readdir("./cmds/Utility/", (err, files) => {
    if (err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load")
    }
    console.log(`Loading ${jsfiles.length} utility commands...`)

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/Utility/${f}`);
        console.log(`${i + 1}: ${f} loaded...`) //display the command being loaded 
        bot.commands.set(props.help.name, props);
    });
});

//Miscellaneous 
fs.readdir("./cmds/Misc/", (err, files) => {
    if (err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load")
    }
    console.log(`Loading ${jsfiles.length} misc commands...`)

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/Misc/${f}`);
        bot.commands.set(props.help.name, props);
    });
});

//Person
/*fs.readdir("./cmds/Person/", (err, files) => {
    if (err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load")
    }
    console.log(`Loading ${jsfiles.length} Person commands...`)

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/Person/${f}`);
        bot.commands.set(props.help.name, props);
    });
});*/

//mysql connection start 
//creates a connection and stores it in the con variable
// var con = mysql.createConnection({
//     host: "localhost", 
//     user: "root",
//     password: botSettings.mysqlpass,
//     database: "Einbot"
// });

// con.connect(err => {
//     if(err) throw err;
//     console.log("Connected to database");
// });


//now playing...
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

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return message.channel.send("Don't slide into my DMs like that!");

    let messageArray = message.content.split(" "); //splits messages up by the spaces and turns it into an array 
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if (!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
});

bot.login(botSettings.token);
