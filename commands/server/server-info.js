const discord = require('discord.js');
const moment = require(`moment`)
const { MessageEmbed } = require('discord.js');

const Discord = require("discord.js");
module.exports = {
    name: 'server',
    category: 'MEMBER',
    description: 'get imag profil memmbers',
    usage: `avatar <user>`,
    run: async (client, message, args) => {
      const owner = await message.guild.members.fetch(message.guild.ownerID);







let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        const embed = new MessageEmbed()
            
            .setColor('#03ffff')
               .setAuthor(message.guild.name, message.guild.iconURL({dynamic : true}))
            .addFields(
                {
                    name: "🤴 Owner: ",
                    value: message.guild.owner.user,
                    inline: true
                },
                {
                    name: `👥 Members: ${message.guild.memberCount}`,
                    value: `Members Online: ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size}`,
                    inline: true
                },
                {
                    name: "🤖 Total Bots: ",
                    value: `There are ${message.guild.members.cache.filter(m => m.user.bot).size} bots!`,
                    inline: true
                },
                {
                    name: "📆 Creation Date: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "🎗 Roles Count: ",
                    value: `There are ${message.guild.roles.cache.size} roles in this server.`,
                    inline: true,
                },
                
                {
                    name: `🛡️ Verified: `,
                    value: message.guild.verified ? 'Server is verified' : `Server isn't verified`,
                    inline: true
                },
                
                {
                  name: `🔮 Boosters:`,
                    value: message.guild.premiumSubscriptionCount >= 1 ? `There are ${message.guild.premiumSubscriptionCount} Boosters` : `There are no boosters`,
                    inline: true
                },
                {
                    name: "😈 Emojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `There are ${message.guild.emojis.cache.size} emojis!` : 'There are no emojis' ,
                    inline: true
                },
                {
                    name: `🗺 Region: `,
                    value: region,
                    inline: true
                },
            )
        await message.channel.send(embed)
    }

}