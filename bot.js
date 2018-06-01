
const Discord = require('discord.js');

const client = new Discord.Client();
const countFiles = require('count-files');
const standardGacha = require('./standardGacha.js');

let memeFileName;
let refuse = ['...', 'No.', 'Hmph.', 'I don\'t want to.', 'Nope.', 'Not you.'];

client.login(process.env.DISCORD_API_KEY);
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function connectClient(memeFileTotal) {
  client.on('message', (msg) => {

    async function start() {
      const done = await standardGacha.gachaStart();
      if (done === 'done') {
        msg.reply('', {
          file: 'output.jpg',
        });
      }
    }

    const channel = client.channels.get(process.env.REPULSION_BOT_SPAM);
    if (msg.content === '!!gacha') {
      if (msg.channel.name !== 'bot-spam') {
        let index = Math.floor(Math.random() * refuse.length);
        msg.reply(refuse[index]);
      } else {
        const memeChance = Math.floor(Math.random() * 100) / 100;
        console.log(`memeChance : ${memeChance}`);
        memeFileName = getRandomInt(1, memeFileTotal + 1);

        if (memeChance < 0.07) {
          msg.reply('', {
            file: `./images/random/${memeFileName}.JPG`,
          });
        } else {
          start();
        }
      }
    }
  });
}

countFiles('images/random', (err, results) => {
  connectClient(results.files);
});
