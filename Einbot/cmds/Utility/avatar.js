module.exports.run = async (bot, message, args) => {
    message.channel.send({files : [
        {
            attachment: message.author.displayAvatarURL, 
            name: "avatar.png"
        }
    ]});
}

module.exports.help = {
    name: "avatar"
}