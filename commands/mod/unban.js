const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const User = require('../../models/user');
const Guild = require('../../models/guild');

module.exports = {
    name: 'unban',
    run: async (client, message, args) => {

              const guildDB = await Guild.findOne({
            guildID: message.guild.id
        }, async (err, guild) => {
            if (err) console.error(err);
                        if (!guild) {
                const newGuild = new Guild({
                    _id: mongoose.Types.ObjectId(),
                    guildID: message.guild.id,
                    guildName: message.guild.name,
                    prefix: process.env.PREFIX,
                    logChannelID: null
                });
                
                await newGuild.save()
                .then(result => console.log(result))
                .catch(err => console.error(err));
            };
        });
const logChannel = message.guild.channels.cache.get(guildDB.logChannelID);


        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You are missing **BAN_MEMBERS** permission!').then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send('please enter a users id to unban!').then(m => m.delete({ timeout: 5000 }));

        let member;

        try {
            member = await client.users.fetch(args[0]) || message.mentions.members.first();
        } catch (e) {
            console.log(e)
            return message.channel.send('Not a valid user!').then(m => m.delete({ timeout: 5000 }));
        }

        const reason = args[1] ? args.slice(1).join(' ') : 'no reason';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        message.guild.fetchBans().then( bans => {

            const user = bans.find(ban => ban.user.id === member.id );

            if (user) {
                embed.setTitle(`Successfully Unbanned ${user.user.tag}`)
                    .setColor('#00ff00')
                    .addField('User ID', user.user.id, true)
                    .addField('user Tag', user.user.tag, true)
                    .addField('Banned Reason', user.reason != null ? user.reason : 'no reason')
                    .addField('Unbanned Reason', reason)
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
            } else {
                embed.setTitle(`User ${member.tag} isn't banned!`)
                    .setColor('#ff0000')
                message.channel.send(embed)
            } if (!logChannel) {
            return
        } else {
            const embed = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('User UnBanned')
                .setAuthor(message.guild.name, message.guild.iconURL({dynamic : true}))
                .addField('Username', member.user)
                .addField('User ID', member.id)
                .addField('UnBanned by', message.author)


            return logChannel.send(embed);
        };

        }).catch(e => {
            console.log(e)
            message.channel.send('An error has occurred!')
        });

    }
}