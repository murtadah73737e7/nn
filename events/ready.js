module.exports = client => {
    console.log('Let\'s get this bread!');
    
    client.user.setPresence({
        status: 'dnd',
        activity: {
            name: 'HELP',
            type: 'PLAYING',
          
        }
    });

client.on('guildMemberAdd', async (member) => {
    if(db.has(`captcha-${member.guild.id}`)=== false) return;
    const url = 'https://api.no-api-key.com/api/v2/captcha';
        try {
            fetch(url)
                .then(res => res.json())
                .then(async json => {
                    console.log(json)
                    const msg = await member.send(
                        new MessageEmbed()
                            .setTitle('Please enter the captcha')
                            .setImage(json.captcha)
                            .setColor("RANDOM")
                    )
                    try {
                        const filter = (m) => {
                            if(m.author.bot) return;
                            if(m.author.id === member.id && m.content === json.captcha_text) return true;
                            else {
                                msg.channel.send("You have answered the captcha incorrectly!")
                            }
                        };
                        const response = await msg.channel.awaitMessages(filter, {
                            max : 1,
                            time : 10000,
                            errors : ['time']
                        })
                        if(response) {
                            msg.channel.send('Congrats, you have answered the captcha.')
                        }
                    } catch (error) {
                        msg.channel.send(`You have been kicked from **${member.guild.name}** for not answering the captcha correctly.`)
                        let role = message.guild.roles.cache.find(r => r.name === "View Ticket");

// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
let member = message.mentions.members.first();
                        member.roles.add(role).catch(console.error);

                         
                    }
                })
        } catch (error) {
            console.log(error)
        }
})

}