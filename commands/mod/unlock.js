const { MessageEmbed } = require('discord.js');
const { ReactionRole } = require("reaction-role");

module.exports = {
    name: "unlock",
    category: "moderation",
    description: "unlocks a channel.",
    run: async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES", "ADMINSTRATOR")) // sets the perm.
     return message.channel.send(
         `You do not have correct permissions to do this action, ${message.author.username}` // return this msg if the user dont hv perm
     );
//You must have a permission script above here to stop normal members from using this
message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: true }).then(() => {
      message.reply(".as been unlocked.**")
    });
        }
    }