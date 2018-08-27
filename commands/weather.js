const Discord = require("discord.js")
const weather = require("weather-js")

module.exports.run = async(bot, message, args) => {
    await message.delete()
    if (message.author.id != 450763281293115404) return;
    weather.find({search: message.content.substring(10), degreeType: 'C'}, function(err, result) {
        if(err) message.channel.send(err);

        var current = result[0].current;

        let embed = new Discord.RichEmbed()
        .setTitle(`Prévision météo de ** ${current.observationpoint} ** pour le **${current.date}**`)
        .setColor("RANDOM")
        .setDescription(`**${current.skytext}**`)
        .setThumbnail(current.imageUrl)
        .addField("Vitesse/Direction du vent", current.winddisplay)
        .addField("Température", current.temperature + "°C")
        .addField("Humidité", current.humidity)

        message.channel.send(embed);
    })
}

module.exports.help = {
    name: "weather"
}