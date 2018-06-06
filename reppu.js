const Discord = require('discord.js');

const client = new Discord.Client();
const focusedGacha = require('./focusedGacha');

client.login("NDUyMTEwNTgwNDMwNjY3Nzgx.DfLnsw.Ilx0ZTwcTCbKzSGjqr_C9LxnOEE");
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {    
    if (msg.content === '!ping') {
        msg.channel.send('pong!');
    }
    else if (msg.content === '!!focused') {
        focusedGacha.startGacha(msg);
    }
});