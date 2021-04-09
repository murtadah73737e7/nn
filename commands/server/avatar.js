const Discord = require('discord.js');
module.exports = {
    name: 'savatar',
    category: 'MEMBER',
    description: 'get imag profil memmbers',
    usage: `avatar <user>`,
    run: async (client, message, args) => {
   

  let avatar = message.guild.iconURL({ dynamic: true , size: 4096
      })
  let doma = new Discord.MessageEmbed()
      .setColor("#03ffff")
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setTitle("Avatar Link")
      .setURL(message.guild.iconURL({
        dynamic: true
      }))
      .setImage(avatar)
      .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
      message.channel.send(doma)
  
  



    }
    }
    
