const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    if (message.author.id != 450763281293115404) return;
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Vous n'avez pas les autorisations");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous ne pouvez pas ban cette personne");
    
    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("RANDOM")
    .addField("Personne ban", `${bUser} with ID ${bUser.id}`)
    .addField("Bannis par", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Date", message.createdAt)
    .addField("Raison", bReason);
    
    let incidentchannel = message.guild.channels.find(`name`, "incidents");
    if(!incidentchannel) return message.channel.send("Vous devez avoir un channel nommé **bankick**");
    
    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);

    return;
};

module.exports.help = {
    name: "ban"
}