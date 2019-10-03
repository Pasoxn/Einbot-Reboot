const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let narn = JSON.parse(fs.readFileSync('cmds/Person/JSON files/narn.json'));
    let random = narn[Math.floor(Math.random() * narn.length)];

        message.channel.send(" ", {files: [random]});

}
module.exports.help = {
    name: "narn"
}