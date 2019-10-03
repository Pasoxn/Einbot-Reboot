const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let olivia = JSON.parse(fs.readFileSync('cmds/Person/JSON files/olivia.json'));
    let random = olivia[Math.floor(Math.random() * olivia.length)];

        message.channel.send(" ", {files: [random]});

}
module.exports.help = {
    name: "olivia"
}