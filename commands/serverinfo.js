const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    if (message.author.id != 450763281293115404) return;
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Nom du serveur", message.guild.name)
    .addField("Crée le", message.guild.createdAt)
    .addField("Rejoins le", message.member.joinedAt)
    .addField("Nombre de membres", message.guild.memberCount);

    return message.channel.send(serverembed);
}

module.exports.help = {
    name: "serverinfo"
}