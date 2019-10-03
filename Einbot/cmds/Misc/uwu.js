const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    const msg = message.content.slice(4);
    let msg1 = msg.replace(/l/g, "w")
    let msg2 = msg1.replace(/r/g, "w")

    message.channel.send(msg2 + " uwu");
}
module.exports.help = {
    name: "uwu"
}

