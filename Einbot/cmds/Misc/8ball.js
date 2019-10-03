module.exports.run = async (bot, message, args) => {
    var options = [
        "It is certain.", 
        "It is decidedly so.", 
        "Without a doubt.", 
        "Yes - definitely.", 
        "You may rely on it.",
        "As I see it, yes.", 
        "Most likely.", 
        "Outlook good.", 
        "All signs point to yes.", 
        "Yes.", 
        "Reply hazy, try again.", 
        "Ask again later.", 
        "Better not tell you now.", 
        "Cannot predict now.", 
        "Concentrate and ask again", 
        "Don't count on it.", 
        "My reply is no.", 
        "My sources say no.", 
        "Outlook not so good.", 
        "Very doubtful."
    ]
    var random = options[Math.floor(Math.random()* options.length)];
    
    message.channel.send(random + " " + message.author);
}

module.exports.help = {
    name: "8ball"
}