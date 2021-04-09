const Discord = require('discord.js');
module.exports = {
    name: 'roles',
    category: 'MEMBER',
    description: 'get imag profil memmbers',
    usage: `avatar <user>`,
    run: async (client, message, args) => {
   

  
    var roles = message.guild.roles.cache.map(e => e.toString()).join("\n");
 
  
  
      const RankList = new Discord.MessageEmbed()
          .setTitle('➠ Roles.')
          .setAuthor(message.guild.name, message.guild.iconURL)
          .setColor('#03ffff')
          .setDescription(roles)
          .setFooter(message.guild.name)
      message.channel.send(RankList)
  
    }}