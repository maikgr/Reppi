const Discord = require('discord.js');
const focused = require('./focusedGacha');
const imageBuilder = require('./imageBuilder');

const client = new Discord.Client();

client.login(process.env.DISCORD_API_KEY);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    focused.initialize();
});

client.on('message', (msg) => {
    if (msg.content === '!ping') {
        msg.channel.send('pong!');
    }
    else if (msg.content === '!focused') {
        let gachaResult = focused.startGacha();

        msg.reply({
            embed: {
                "title" : "Focused Gacha",
                "description" : gachaResult.join(' \n'),
                "color": 4886754
            }
        });
    } 
    // else if (msg.content === '!!test'){
    //     let testStig = {
    //         "name": "Rowland",
    //         "skill": "Recover 22 / 46 HP per every 3.0 seconds",
    //         "image": "http://houkai3rd.arthobbylab.com/wp-content/uploads/sites/2/2017/08/Roland-1_thumb.png",
    //         "type": "top",
    //         "rarity": 3
    //     }
        
    //     let filepath = imageBuilder.buildStigmata(msg, testStig);
    // }
});