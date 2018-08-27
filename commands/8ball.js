const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    if(!args[2]) return message.reply("Pose une vrai question gogole");
    let replies = ["Oui", "Non", "Je ne sais pas", "Je répondrais plus tard"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ")

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("RANDOM")
    .addField("Question", question)
    .addField("Réponse", replies[result]);

    message.channel.send(ballembed)
}

module.exports.help = {
    name: "question"
}