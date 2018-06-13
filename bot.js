
const Discord = require('discord.js');

const client = new Discord.Client();
const countFiles = require('count-files');
const standardGacha = require('./standardGacha.js');
const valkyrie = require('./valkyrie.js');
const weapon = require('./weapon.js');
const stigmata = require('./stigmata.js');

let memeFileName;

client.login(process.env.DISCORD_API_KEY);
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function getRandomInt(min, max) {
  const intMin = parseInt(min);
  const intMax = parseInt(max);
  return (Math.floor(Math.random() * (intMax - intMin)) + intMin);
}

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

    const channel = client.channels.get('424485532794355732');

    if (msg.content === '!gacha') {
      if (msg.channel.name !== 'bot-spam') {
        msg.reply(`Does this looks like ${channel} channel to you? 
          If yes, I suggest you to get your eyesight checked.`);
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

    if (msg.content.startsWith('!v')) {
      const message = msg.content.substr(msg.content.indexOf(' ') + 1);
      if (message.startsWith('!v')) {
        valkyrie.valkyrieList(msg);
      } else {
        valkyrie.valkyrieSearch(msg);
      }
    }

    if (msg.content.startsWith('!w')) {
      const message = msg.content.substr(msg.content.indexOf(' ') + 1);
      if (message.startsWith('!w')) {
        weapon.weaponList(msg);
      } else {
        weapon.weaponSearch(msg);
      }
    }

    if (msg.content.startsWith('!s')) {
      const message = msg.content.substr(msg.content.indexOf(' ') + 1);
      if (message.startsWith('!s')) {
        stigmata.stigmataMenu(msg);
      } else {
        stigmata.stigmataSearch(msg);
      }
    }

    if (msg.content === '!reppi') {
      const embed = {
        color: 6332693,
        title: 'Reppi Menu',
        footer: {
          icon_url: 'attachment://attentionicon.PNG',
          text: 'Please press the number below (reaction) to select',
        },
        fields: [{
          name: '----------------',
          value: '1. Weapon\n2. Stigmata\n3. Valkyrie',
        }],
      };
      msg.reply({
        embed,
        files: [{
          attachment: 'images/attentionicon.PNG',
          name: 'attentionicon.PNG',
        }],
      }).then(async (newMessage) => {
        const filter = (reaction, user) =>
          user.id === msg.author.id &&
          reaction.emoji.name === '1⃣' ||
          user.id === msg.author.id &&
          reaction.emoji.name === '2⃣' ||
          user.id === msg.author.id &&
          reaction.emoji.name === '3⃣' ||
          user.id === msg.author.id &&
          reaction.emoji.name === '❌';
        const collector = newMessage.createReactionCollector(filter, { time: 30000 });
        newMessage.delete(30000).catch(() => { });
        collector.once('collect', async (reaction) => {
          const chosen = reaction.emoji.name;
          if (chosen === '1⃣') {
            newMessage.delete();
            weapon.weaponList(msg);
          } else if (chosen === '2⃣') {
            newMessage.delete();
            stigmata.stigmataMenu(msg);
          } else if (chosen === '3⃣') {
            valkyrie.valkyrieList(msg);
            newMessage.delete();
          } else if (chosen === '❌') {
            newMessage.delete();
          }
          collector.stop();
        });
        await newMessage.react('1⃣').catch(() => { });
        await newMessage.react('2⃣').catch(() => { });
        await newMessage.react('3⃣').catch(() => { });
        await newMessage.react('❌').catch(() => { });
      });
    }

  });
}

countFiles('images/random', (err, results) => {
  connectClient(results.files);
});
