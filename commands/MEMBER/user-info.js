
const moment = require(`moment`)
const { MessageEmbed } = require('discord.js');

const Discord = require('discord.js');
module.exports = {
    name: 'user',
    category: 'MEMBER',
    description: 'get imag profil memmbers',
    usage: `avatar <user>`,
    run: async (client, message, args) => {
   




   


 const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username} info `)
            .setColor(`#03ffff`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "Name: ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "#️⃣ Discriminator: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: `🆔 user`,
                    value: user.user.id,
                    inline: true
                  
                },
                
                
                {
                    name: 'Avatar link: ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`,inline: true
                },
                {
                    name: 'Creation Date: ',
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'Joined Date: ',
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
                
            )

        await message.channel.send(embed)
    }


    }