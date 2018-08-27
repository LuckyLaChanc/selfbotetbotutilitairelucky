const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.author.id != 450763281293115404) return;

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Vous n'avez pas les autorisations");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Utilisateur non trouvé");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Spécifié un rôle");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Role non trouvé");

  if(rMember.roles.has(gRole.id)) return message.reply("Cet utilisateur a déja ce rôle");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Le role a bien été donné ${gRole.name}`)
  }catch(e){
    message.channel.send(`Felicitation <@${rMember.id}>, pour votre nouveau rôle ${gRole.name}.`)
  }
}

module.exports.help = {
  name: "addrole"
}