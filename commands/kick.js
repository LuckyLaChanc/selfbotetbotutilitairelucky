const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    if (message.author.id != 450763281293115404) return;
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Utilisateur non trouvé !")
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous ne pouvez pas effectuer cette action !")
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu n'as pas les autorisations !");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Expulsion")
    .setColor("RANDOM")
    .addField("Personne expulser", `${kUser} avec comme ID ${message.author.id}`)
    .addField("Expulser par", `<@${message.author.id}> avec comme ID ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Date", message.createdAt)
    .addField("Raison", kReason);

    let kickChannel = message.guild.channels.find('name', "bankick");
    if(!kickChannel) return message.channel.send("Veuillez avoir un channe nommé **bankick**");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
};

module.exports.help = {
    name: "kick"
}