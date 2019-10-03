const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let eman = JSON.parse(fs.readFileSync('cmds/Person/JSON files/eman.json'));
    let random = eman[Math.floor(Math.random() * eman.length)];

        message.channel.send(" ", {files: [random]});

}
module.exports.help = {
    name: "eman"
}