const discord = require("discord.js");
module.exports = {
    name: 'kick',
    category: 'MEMBER',
    description: 'get imag profil memmbers',
    usage: `avatar <user>`,
    run: async (client, message, args) => {

      let membert = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      if (!message.member.hasPermission("KICK_MEMBERS")){
        return message.channel.send("you not have permissions")

      } else if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
        return message.channel.send("i dont have prem")
      } else if (!membert){
        return message.channel.send("mentions member")
      }
      const mentionPos = membert.roles.highest.position
      const memberPos = message.member.roles.highest.position
      const botPos = message.guild.me.roles.highest.position
      if (memberPos <= mentionPos){
        return message.channel.send("لا تستطيع طرد هاذة العضو")
      } else if (botPos <= mentionPos) {
        return message.channel.send("لايمكن طرد هاذة العضو")
      } 
      const resoin = args.slice(1).join(" ")
      try {
        await membert.kick([resoin])
        message.channel.send(`kicked ${membert} for **${resoin}**`)
      } catch (error){
        console.log(error)
        message.channel.send("error")
      }



    }
    }


