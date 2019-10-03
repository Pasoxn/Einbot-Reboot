const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let annie = JSON.parse(fs.readFileSync('cmds/Person/JSON files/annie.json'));
    let random = annie[Math.floor(Math.random() * annie.length)];

        message.channel.send(" ", {files: [random]});

}
module.exports.help = {
    name: "annie"
}