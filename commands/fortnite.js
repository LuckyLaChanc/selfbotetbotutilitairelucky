const Discord = require("discord.js");
const Client = require("fortnite");
const fortnite = new Client("928037f3-3237-45aa-970c-b20c76726410");

module.exports.run = async (bot, message, args) => {
    if (message.author.id != 450763281293115404) return;

    await message.delete();

    let platform = args[0] || 'pc';
    let username = message.content.substring(16++)

    if(!username) return message.reply("Indique un username")

    let data = fortnite.user(username, platform).then(data => {
        let stats = data.stats;
        let lifetime = stats.lifetime;

        let score = lifetime[6]['Score'];
        let mp = lifetime[7]['Matches Played'];
        let wins = lifetime[8]['Wins'];
        let winp = lifetime[9]['Win%'];
        let kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];

        let embed = new Discord.RichEmbed()
        .setTitle("Stats Fortnite de **" + message.content.substring(16) + "**")
        .setColor("RANDOM")
        .addField("Top 1", wins, true)
        .addField("Score Total", score, true)



    })
}

module.exports.help = {
    name: "fortnitepc"
}