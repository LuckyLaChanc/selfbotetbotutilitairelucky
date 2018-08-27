const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    if (message.author.id != 450763281293115404) return;
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);
    
    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Signalement")
    .setColor("RANDOM")
    .addField("Personne signalé", `${rUser} with ID: ${rUser.id}`)
    .addField("Signaler par", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Date", message.createdAt)
    .addField("Raison", rreason);
    
    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
    
    
    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    message.channel.send("Votre signalement a bien été envoyé et sera traité sous peu")
}

module.exports.help = {
    name: "report"
}