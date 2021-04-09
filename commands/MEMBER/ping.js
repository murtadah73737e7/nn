const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    category: 'MEMBER',
    description: 'get imag profil memmbers',
    usage: `avatar <user>`,
    run: async (client, message, args) => {
    
    
   let pingembed = new Discord.MessageEmbed()
   
    
   .setColor("#03ffff")
   .setTitle(`\`\`\`The speed of my connection ${client.ws.ping} \`\`\` `)
   message.channel.send(pingembed)
  
   
    
    
    }}