const Discord = require('discord.js');
module.exports = {
    name: 'inv',
    category: 'MEMBER',
    description: 'get imag profil memmbers',
    usage: `avatar <user>`,
    run: async (client, message, args) => {
   

   let embed = new Discord.MessageEmbed()
   
   
   .setColor("#03ffff")
   .setTitle(`RootBot invite`)
   .setURL(`https://discord.com/api/oauth2/authorize?client_id=763819060369948733&permissions=8&scope=bot`)
   
   
   .setDescription(`[RootBot support](https://discord.gg/EHF4UR
  )`)
  
   message.channel.send(embed)
  
   
   
   
    }}
