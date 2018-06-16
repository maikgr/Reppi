const Discord = require('discord.js');
const focused = require('./focusedGacha');
const imageBuilder = require('./imageBuilder');

const client = new Discord.Client();

client.login(process.env.DISCORD_API_KEY);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    focused.initialize();
    client.user.setActivity('Reppi', {type: "WATCHING"});
});

client.on('message', (msg) => {
    if (msg.content === '!focused') {
        let gachaResult = focused.startGacha();
        imageBuilder.gachaBuilder(msg, gachaResult);
    }
    else if (msg.content === '!reinitialize') {
        focused.initialize();
    }
});