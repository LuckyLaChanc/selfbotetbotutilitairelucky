const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  if (message.author.id != 450763281293115404) return;


  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Utilisateur non trouvé");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous ne pouvez pas mute cette personne");
  let muterole = message.guild.roles.find(`name`, "muted");
 
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  
  let mutetime = args[1];
  if(!mutetime) return message.reply("Vous n'avez pas spécifié le temps!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> été mute pour ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> a été unmute!`);
  }, ms(mutetime));
}

module.exports.help = {
  name: "tempmute"
}