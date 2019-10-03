const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#FDFD96")
        .addField("Full Username", message.author.tag)
        .addField("Created at", message.author.createdAt)
        .setImage(message.author.avatarURL)
        // .setDescription("description")


    message.channel.send(embed);
}

module.exports.help = {
    name: "userinfo"
}