const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let insults = JSON.parse(fs.readFileSync('cmds/Misc/insults.json'));
    let random = insults[Math.floor(Math.random() * insults.length)];
    var mention = message.mentions.users.first();

    if (mention == undefined) {
        message.channel.send("**" + random + "**");
    }
    else {
        message.channel.send("**" + random + "**" + " " + mention);
    }
}

module.exports.help = {
    name: "insult"
}