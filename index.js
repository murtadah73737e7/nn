const { Client,Collection } = require('discord.js');
const { config } = require('dotenv');
const fs = require('fs');
const mongoose = require('mongoose');
const client = new Client({partials:["MESSAGE","REACTION",'CHANNEL']});
const { MessageEmbed } = require('discord.js');
client.commands = new Collection();
client.aliases = new Collection();
client.mongoose = require('./utils/mongoose');

client.categories = fs.readdirSync('./commands/');

config({
    path: `${__dirname}/.env`
});

['command'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

fs.readdir('./events/', (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        const evt = require(`./events/${file}`);
        let evtName = file.split('.')[0];
        console.log(`Loaded event '${evtName}'`);
        client.on(evtName, evt.bind(null, client));
    });
});

client.mongoose.init();






///////////////////////////////

client.login("ODIwMzk5NTE1NjY4MzE2MjIw.YE0mlg.he0OlByTvjDBEQG3Yydhjd8sVes")