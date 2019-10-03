const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let laura = JSON.parse(fs.readFileSync('cmds/Person/JSON files/laura.json'));
    let random = laura[Math.floor(Math.random() * laura.length)];

        message.channel.send(" ", {files: [random]});

}
module.exports.help = {
    name: "laura"
}