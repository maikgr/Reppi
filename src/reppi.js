const Discord = require('discord.js');

const sql = require("sqlite");
sql.open("src/database/gachaTotal.sqlite");

const client = new Discord.Client();
const standardGacha = require('./commands/standardGacha.js');
const valkyrie = require('./commands/valkyrie.js');
const weapon = require('./commands/weapon.js');
const stigmata = require('./commands/stigmata.js');

const talkedRecently = new Set();

client.login(process.env.DISCORD_API_KEY);
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function getRandomInt(min, max) {
  const intMin = parseInt(min);
  const intMax = parseInt(max);
  return (Math.floor(Math.random() * (intMax - intMin)) + intMin);
}

function connectClient() {
  client.on('message', (msg) => {



    async function start() {

      await sql.get(`SELECT * FROM gachaTotal WHERE userId ="${msg.author.id}"`).then(row => {
        if (!row) {
          sql.run("INSERT INTO gachaTotal (userId, crystals) VALUES (?, ?)", [msg.author.id, 2800]);
        } else {
          sql.run(`UPDATE gachaTotal SET crystals = ${row.crystals + 2800} WHERE userId = ${msg.author.id}`);
        }
      }).catch(() => {
        console.error;
        sql.run("CREATE TABLE IF NOT EXISTS gachaTotal (userId TEXT, crystals INTEGER)").then(() => {
          sql.run("INSERT INTO gachaTotal (userId, crystals) VALUES (?, ?)", [msg.author.id, 2800]);
        });
      });

      let rarity = await standardGacha.gachaStart();

      if (rarity < 4) {
        msg.reply('', {
          file: 'src/images/output.jpg',
        });

      } else {
        let crystalSpent = 0;

        await sql.get(`SELECT * FROM gachaTotal WHERE userId ="${msg.author.id}"`).then(row => {
          crystalSpent = row.crystals;
        })

        await msg.reply(`you've spent ${crystalSpent} crystals to get an S rank valkyrie`, {
          file: 'src/images/output.jpg',
        });

        await sql.run(`UPDATE gachaTotal SET crystals = 0 WHERE userId = ${msg.author.id}`);
      }
    }

    const channel = client.channels.get('378748690095013919');

    if (msg.content === '!gacha') {
      if (msg.channel.name !== 'bot-spam') {
        msg.reply(`Does this looks like ${channel} channel to you? 
          If yes, I suggest you to get your eyesight checked.`);
      } else {

        if (talkedRecently.has(msg.author.id)) {
          msg.reply("slow down!")
        } else {
          talkedRecently.add(msg.author.id);
          setTimeout(() => {
            talkedRecently.delete(msg.author.id);
          }, 7000);
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
          attachment: 'src/images/attentionicon.PNG',
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
        const collector = newMessage.createReactionCollector(filter, {
          time: 30000
        });
        newMessage.delete(30000).catch(() => {});
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
        await newMessage.react('1⃣').catch(() => {});
        await newMessage.react('2⃣').catch(() => {});
        await newMessage.react('3⃣').catch(() => {});
        await newMessage.react('❌').catch(() => {});
      });
    }



  });
}

connectClient();