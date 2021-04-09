
const Discord = require('discord.js');
module.exports = {
    name: 'avatar',
    category: 'MEMBER',
    description: 'get imag profil memmbers',
    usage: `avatar <user>`,
    run: async (client, message, args) => {




          
         if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }
  
  let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
  // 4096 is the new biggest size of the avatar.
  // Enabling the dynamic, when the user avatar was animated/GIF, it will result as a GIF format.
  // If it's not animated, it will result as a normal image format.
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`${user.username} avatar`)
  .setDescription(`[Avatar URL](${avatar})`)
  .setColor("#03ffff")
  .setImage(avatar)
  
  return message.channel.send(embed);
}
   

    }