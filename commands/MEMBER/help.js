
const Discord = require('discord.js');
module.exports = {
    name: 'help',
    category: 'MEMBER',
    description: 'get imag profil memmbers',
    usage: `avatar <user>`,
    run: async (client, message, args) => {
   



    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.MessageEmbed()
    .setColor('#03ffff')
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("**___االعربية___**","🇮🇶",true)
    .addField("**___Engilsh___**","🇺🇸",true)
    
    message.channel.send(RpsEmbed).then(msg => {
        msg.react('🇮🇶')
        msg.react("🇺🇸")
        msg.react("❎")

.then(() => msg.react('🇮🇶'))
.then(() =>msg.react('🇺🇸'))
.then(() =>msg.react('❎'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇮🇶' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇺🇸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 20000 })
reaction1.on("collect", r => {

      msg.delete({timeout:0}); 
    }
)
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 19000 });
reaction2.on("collect", r => {

      msg.delete({timeout:0}); 
    }
)
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 18000 });
reaction3.on("collect", r => {

      msg.delete({timeout:0}); 
    }
)

reaction1.on("collect", r => {
  const embed = new Discord.MessageEmbed()
      .setThumbnail('https://cdn.discordapp.com/attachments/761758394482163763/761758428938633274/flag-iraq_1f1ee-1f1f6.png')
      .setColor("#03ffff")
      .setDescription(`**___قائمة المساعدة بلغة العربية___**
**


**
`)
   message.author.send(embed)
      message.reply('تم ارسالك بلخاص')
})
reaction2.on("collect", r => {
      
    const embed = new Discord.MessageEmbed()
 
  .setThumbnail('https://cdn.discordapp.com/attachments/761758394482163763/761758418175787028/flag-united-states_1f1fa-1f1f8.png')
      .setColor("#03ffff")
      .setDescription(`**___Help orders in the English language
___**
**

**
`)
   message.author.send(embed)
      message.reply('Check your dm')
})
    })
}
}
   
