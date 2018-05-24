
const Discord = require('discord.js');

const client = new Discord.Client();
const countFiles = require('count-files');
const standardGacha = require('./standardGacha.js');

const equipmentDatabase = require('./equipmentdb.js');

let memeFileName;

client.login('NDI0ODA4NDA2NDcwMzYxMDg4.DZk4lw.TJzxym6ET6Hg8uGGd_wdHWZYWqQ');
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

    const channel = client.channels.get('378748690095013919');
    // 378748690095013919 for Repulsion
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

    function valkyrieSelectedClass(valkyrieNum, valkyrieChosenClass) {
      if (valkyrieNum === 1) {
        if (valkyrieChosenClass === 1) {
          msg.reply('', { file: './images/valkyriedetails/whitecomet.PNG' });
        } if (valkyrieChosenClass === 2) {
          msg.reply('', { file: './images/valkyriedetails/ranger.PNG' });
        } if (valkyrieChosenClass === 3) {
          msg.reply('', { file: './images/valkyriedetails/divineprayer.PNG' });
        } if (valkyrieChosenClass === 4) {
          msg.reply('', { file: './images/valkyriedetails/moonbeam.PNG' });
        }
      }

      if (valkyrieNum === 2) {
        if (valkyrieChosenClass === 1) {
          msg.reply('', { file: './images/valkyriedetails/crimsonimpulse.PNG' });
        } if (valkyrieChosenClass === 2) {
          msg.reply('', { file: './images/valkyriedetails/shadowdash.PNG' });
        } if (valkyrieChosenClass === 3) {
          msg.reply('', { file: './images/valkyriedetails/striker.PNG' });
        } if (valkyrieChosenClass === 4) {
          msg.reply('', { file: './images/valkyriedetails/lightningempress.PNG' });
        }
      }

      if (valkyrieNum === 3) {
        if (valkyrieChosenClass === 1) {
          msg.reply('', { file: './images/valkyriedetails/chariot.PNG' });
        } if (valkyrieChosenClass === 2) {
          msg.reply('', { file: './images/valkyriedetails/yamabuki.PNG' });
        } if (valkyrieChosenClass === 3) {
          msg.reply('', { file: './images/valkyriedetails/snowy.PNG' });
        } if (valkyrieChosenClass === 4) {
          msg.reply('', { file: './images/valkyriedetails/dimensionalbreak.PNG' });
        } if (valkyrieChosenClass === 5) {
          msg.reply('', { file: './images/valkyriedetails/wolf.PNG' });
        } if (valkyrieChosenClass === 6) {
          msg.reply('', { file: './images/valkyriedetails/blacknucleus.PNG' });
        }
      }

      if (valkyrieNum === 4) {
        if (valkyrieChosenClass === 1) {
          msg.reply('', { file: './images/valkyriedetails/battlestorm.PNG' });
        } if (valkyrieChosenClass === 2) {
          msg.reply('', { file: './images/valkyriedetails/triumph.PNG' });
        } if (valkyrieChosenClass === 3) {
          msg.reply('', { file: './images/valkyriedetails/scarletfusion.PNG' });
        } if (valkyrieChosenClass === 4) {
          msg.reply('', { file: './images/valkyriedetails/bloodrose.PNG' });
        }
      }

      if (valkyrieNum === 5) {
        if (valkyrieChosenClass === 1) {
          msg.reply('', { file: './images/valkyriedetails/miko.PNG' });
        } if (valkyrieChosenClass === 2) {
          msg.reply('', { file: './images/valkyriedetails/firesaku.PNG' });
        } if (valkyrieChosenClass === 3) {
          msg.reply('', { file: './images/valkyriedetails/unforgottenapostle.PNG' });
        }
      }

      if (valkyrieNum === 6) {
        if (valkyrieChosenClass === 1) {
          msg.reply('', { file: './images/valkyriedetails/pledge.PNG' });
        } if (valkyrieChosenClass === 2) {
          msg.reply('', { file: './images/valkyriedetails/rondo.PNG' });
        } if (valkyrieChosenClass === 3) {
          msg.reply('', { file: './images/valkyriedetails/violetexecuter.PNG' });
        } if (valkyrieChosenClass === 4) {
          msg.reply('', { file: './images/valkyriedetails/anthem.PNG' });
        }
      }

      if (valkyrieNum === 7) {
        if (valkyrieChosenClass === 1) {
          msg.reply('', { file: './images/valkyriedetails/kallen.PNG' });
        }
      }

      if (valkyrieNum === 8) {
        if (valkyrieChosenClass === 1) {
          msg.reply('', { file: './images/valkyriedetails/swiftwing.PNG' });
        } if (valkyrieChosenClass === 2) {
          msg.reply('', { file: './images/valkyriedetails/blackknight.PNG' });
        }
      }
    }

    function valkyrieSelected(valkyrieNum) {
      const currentValkyrieNum = valkyrieNum;
      let embed = '';
      let total = 0;
      if (currentValkyrieNum === 1) {
        embed = {
          color: 6332693,
          title: 'Kiana Kaslana',
          footer: {
            icon_url: 'attachment://attentionicon.PNG',
            text: 'Please press the number below (reaction) to select',
          },
          fields: [{
            name: '----------------',
            value: '1. White Comet\n2. Ranger\n3. Divine Prayer\n4. Moonbeam',
          }],
        };
        total = 4;
      } else if (currentValkyrieNum === 2) {
        embed = {
          color: 6332693,
          title: 'Mei Raiden',
          footer: {
            icon_url: 'attachment://attentionicon.PNG',
            text: 'Please press the number below (reaction) to select',
          },
          fields: [{
            name: '----------------',
            value: '1. Crimson Impulse\n2. Shadow Dash\n3. Bladestrike\n4. Lightning Empress',
          }],
        };
        total = 4;
      } else if (currentValkyrieNum === 3) {
        embed = {
          color: 6332693,
          title: 'Bronya Zaychik',
          footer: {
            icon_url: 'attachment://attentionicon.PNG',
            text: 'Please press the number below (reaction) to select',
          },
          fields: [{
            name: '----------------',
            value: '1. Chariot\n2. Yamabuki Armor\n3. Snowy Sniper\n4. Dimensional Break\n5. Wolf Dawn\n6. Black Nucleus',
          }],
        };
        total = 6;
      } else if (currentValkyrieNum === 4) {
        embed = {
          color: 6332693,
          title: 'Himeko Murata',
          footer: {
            icon_url: 'attachment://attentionicon.PNG',
            text: 'Please press the number below (reaction) to select',
          },
          fields: [{
            name: '----------------',
            value: '1. Battle Storm\n2. Triumph\n3. Scarlet Fusion\n4. Blood Rose',
          }],
        };
        total = 4;
      } else if (currentValkyrieNum === 5) {
        embed = {
          color: 6332693,
          title: 'Sakura Yae',
          footer: {
            icon_url: 'attachment://attentionicon.PNG',
            text: 'Please press the number below (reaction) to select',
          },
          fields: [{
            name: '----------------',
            value: '1. Miko\n2. Fire Goddess\n3. Unforgotten Apostle',
          }],
        };
        total = 3;
      } else if (currentValkyrieNum === 6) {
        embed = {
          color: 6332693,
          title: 'Theresa Apocalypse',
          footer: {
            icon_url: 'attachment://attentionicon.PNG',
            text: 'Please press the number below (reaction) to select',
          },
          fields: [{
            name: '----------------',
            value: '1. Pledge\n2. Rondo\n3. Violet Executer\n4. Divine Blessing Anthem',
          }],
        };
        total = 4;
      } else if (currentValkyrieNum === 7) {
        embed = {
          color: 6332693,
          title: 'Kallen Kaslana',
          footer: {
            icon_url: 'attachment://attentionicon.PNG',
            text: 'Please press the number below (reaction) to select',
          },
          fields: [{
            name: '----------------',
            value: '1. Holy Ceremony',
          }],
        };
        total = 1;
      } else if (currentValkyrieNum === 8) {
        embed = {
          color: 6332693,
          title: 'Fu Hua',
          footer: {
            icon_url: 'attachment://attentionicon.PNG',
            text: 'Please press the number below (reaction) to select',
          },
          fields: [{
            name: '----------------',
            value: '1. Swift Wing\n2. Black Knight',
          }],
        };
        total = 2;
      }

      const reactionNumberArrayValkyrie = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣'];

      msg.reply({
        embed,
        files: [{
          attachment: 'images/attentionicon.PNG',
          name: 'attentionicon.PNG',
        }],
      }).then(async (newMessage) => {
        const filter = (reaction, user) =>
          user.id === msg.author.id &&
      reaction.emoji.name === '◀' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '1⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '2⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '3⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '4⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '5⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '6⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '7⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '8⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '9⃣' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '▶' ||
      user.id === msg.author.id &&
      reaction.emoji.name === '❌';
        const collector = newMessage.createReactionCollector(filter, { time: 30000 });
        newMessage.delete(30000).catch(() => {});
        collector.once('collect', async (reaction) => {
          const chosen = reaction.emoji.name;
          for (let i = 0; i < total; i++) {
            const emoji = reactionNumberArrayValkyrie[i];
            const valkyrieChosenClass = i;
            if (chosen === await emoji) {
              newMessage.delete();
              valkyrieSelectedClass(valkyrieNum, valkyrieChosenClass + 1);
            }
          }
          if (chosen === '❌') {
            newMessage.delete();
          }
          collector.stop();
        });
        for (let i = 0; i < total; i++) {
          const emoji = reactionNumberArrayValkyrie[i];
          await newMessage.react(emoji).catch(() => {});
        }
        await newMessage.react('❌').catch(() => {});
      });

    }

    function valkyrieList() {
      const reactionNumberArrayValkyrie = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣'];
      const embed = {
        color: 6332693,
        title: 'Valkyrie List',
        footer: {
          icon_url: 'attachment://attentionicon.PNG',
          text: 'Please press the number below (reaction) to select',
        },
        fields: [{
          name: '----------------',
          value: '1. Kiana Kaslana\n2. Mei Raiden\n3. Bronya Zaychik\n4. Himeko Murata\n5. Sakura Yae\n6. Theresa Apocalypse\n7. Kallen Kaslana\n8. Fu Hua',
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
        reaction.emoji.name === '4⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '5⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '6⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '7⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '8⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '❌';
        const collector = newMessage.createReactionCollector(filter, { time: 30000 });
        newMessage.delete(30000).catch(() => {});
        collector.once('collect', async (reaction) => {
          const chosen = reaction.emoji.name;
          for (let i = 0; i < 8; i++) {
            const emoji = reactionNumberArrayValkyrie[i];
            if (chosen === await emoji) {
              newMessage.delete();
              valkyrieSelected(i + 1);
            }
          }

          if (chosen === '❌') {
            newMessage.delete();
          }
          collector.stop();
        });
        await newMessage.react('1⃣').catch(() => {});
        await newMessage.react('2⃣').catch(() => {});
        await newMessage.react('3⃣').catch(() => {});
        await newMessage.react('4⃣').catch(() => {});
        await newMessage.react('5⃣').catch(() => {});
        await newMessage.react('6⃣').catch(() => {});
        await newMessage.react('7⃣').catch(() => {});
        await newMessage.react('8⃣').catch(() => {});
        await newMessage.react('❌').catch(() => {});
      });
    }

    if (msg.content.startsWith('!valkyrie') || msg.content.startsWith('!valk') || msg.content.startsWith('!v')) {
      valkyrieList();
    }

    function weaponMenu(page, rarity, weaponType) {
      const currentPage = page;
      const currentRarity = rarity;
      const currentWeaponType = weaponType;
      let titleForEmbed = '';
      let authorImageAttachmentForEmbed = '';
      let selectedWeapon = '';

      if (rarity === 1) {
        if (weaponType === 1) {
          titleForEmbed = '4★ Gun';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/gunicon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.gun.fourstar;
        }
        if (weaponType === 2) {
          titleForEmbed = '4★ Katana';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/katanaicon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.katana.fourstar;
        }
        if (weaponType === 3) {
          titleForEmbed = '4★ Cannon';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/cannonicon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.cannon.fourstar;
        }
        if (weaponType === 4) {
          titleForEmbed = '4★ Greatsword';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/greatswordicon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.greatsword.fourstar;
        }
        if (weaponType === 5) {
          titleForEmbed = '4★ Cross';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/crossicon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.cross.fourstar;
        }
        if (weaponType === 6) {
          titleForEmbed = '4★ Gauntlet';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/gauntleticon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.gauntlet.fourstar;
        }
      }

      if (rarity === 2) {
        if (weaponType === 1) {
          titleForEmbed = '3★ Gun';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/gunicon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.gun.threestar;
        }
        if (weaponType === 2) {
          titleForEmbed = '3★ Katana';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/katanaicon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.katana.threestar;
        }
        if (weaponType === 3) {
          titleForEmbed = '3★ Cannon';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/cannonicon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.cannon.threestar;
        }
        if (weaponType === 4) {
          titleForEmbed = '3★ Greatsword';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/greatswordicon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.greatsword.threestar;
        }
        if (weaponType === 5) {
          titleForEmbed = '3★ Cross';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/crossicon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.cross.threestar;
        }
        if (weaponType === 6) {
          titleForEmbed = '3★ Gauntlet';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/gauntleticon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.gauntlet.threestar;
        }
      }

      if (rarity === 3) {
        if (weaponType === 1) {
          titleForEmbed = '2★ Gun';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/gunicon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.gun.twostar;
        }
        if (weaponType === 2) {
          titleForEmbed = '2★ Katana';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/katanaicon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.katana.twostar;
        }
        if (weaponType === 3) {
          titleForEmbed = '2★ Cannon';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/cannonicon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.cannon.twostar;
        }
        if (weaponType === 4) {
          titleForEmbed = '2★ Greatsword';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/greatswordicon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.greatsword.twostar;
        }
        if (weaponType === 5) {
          titleForEmbed = '2★ Cross';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/crossicon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.cross.twostar;
        }
        if (weaponType === 6) {
          titleForEmbed = '2★ Gauntlet';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/gauntleticon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.gauntlet.twostar;
        }
      }

      if (rarity === 4) {
        if (weaponType === 1) {
          titleForEmbed = '1★ Gun';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/gunicon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.gun.onestar;
        }
        if (weaponType === 2) {
          titleForEmbed = '1★ Katana';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/katanaicon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.katana.onestar;
        }
        if (weaponType === 3) {
          titleForEmbed = '1★ Cannon';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/cannonicon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.cannon.onestar;
        }
        if (weaponType === 4) {
          titleForEmbed = '1★ Greatsword';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/greatswordicon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.greatsword.onestar;
        }
        if (weaponType === 5) {
          titleForEmbed = '1★ Cross';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/crossicon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.cross.onestar;
        }
        if (weaponType === 6) {
          titleForEmbed = '1★ Gauntlet';
          authorImageAttachmentForEmbed = 'images/equipment/weapon/gauntleticon.PNG';
          selectedWeapon = equipmentDatabase.equipment.weapon.gauntlet.onestar;
        }
      }

      const weaponArrayName = [];
      const weaponArrayWhole = [];
      for (let i = 0; i < selectedWeapon.length; i++) {
        weaponArrayName.push(selectedWeapon[i][0]);
        weaponArrayWhole.push(selectedWeapon[i]);
      }
      const weaponArrayNameTemp = weaponArrayName;

      for (let i = 0; i < page; i++) {
        weaponArrayNameTemp.splice(0, 9);
        weaponArrayWhole.splice(0, 9);
      }

      const reactionNumberArray = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣'];

      let embedWeaponNames = '';
      if (weaponArrayNameTemp.length > 9) {
        for (let i = 0; i < 9; i++) {
          embedWeaponNames += `${i + 1}. ${weaponArrayNameTemp[i]}\n`;
        }
      } else {
        for (let i = 0; i < weaponArrayNameTemp.length; i++) {
          embedWeaponNames += `${i + 1}. ${weaponArrayNameTemp[i]}\n`;
        }
      }

      const totalPageNumber = Math.floor(selectedWeapon.length / 9) + 1;
      const currentPageDisplay = currentPage + 1;

      let embed = {
        author: {
          name: titleForEmbed,
          icon_url: `attachment://${authorImageAttachmentForEmbed.replace('images/equipment/weapon/', '')}`,
        },
        color: 6332693,
        title: 'Select a weapon',
        thumbnail: {
          url: `attachment://${authorImageAttachmentForEmbed.replace('images/equipment/weapon/', '')}`,
        },
        footer: {
          icon_url: 'attachment://attentionicon.PNG',
          text: `Page ${currentPageDisplay} of ${totalPageNumber} | Please press the number below (reaction) to select`,
        },
        fields: [{
          name: '----------------',
          value: `${embedWeaponNames}`,
        }],
      };
      msg.reply({
        embed,
        files: [{
          attachment: authorImageAttachmentForEmbed,
          name: authorImageAttachmentForEmbed.replace('images/equipment/weapon/', ''),
        }, {
          attachment: 'images/attentionicon.PNG',
          name: 'attentionicon.PNG',
        }],
      }).then(async (newMessage) => {
        const filter = (reaction, user) =>
          user.id === msg.author.id &&
        reaction.emoji.name === '◀' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '1⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '2⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '3⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '4⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '5⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '6⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '7⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '8⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '9⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '▶' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '❌';
        const collector = newMessage.createReactionCollector(filter, { time: 30000 });
        newMessage.delete(30000).catch(() => {});
        collector.once('collect', async (reaction) => {
          const chosen = reaction.emoji.name;
          if (chosen === '◀') {
            newMessage.delete();
            if (currentPage === 0) {
              msg.reply('please do not add reaction by yourself.');
            } else {
              weaponMenu(currentPage - 1, currentRarity, currentWeaponType);
            }
          }

          if (chosen === '▶') {
            newMessage.delete();
            if (weaponArrayWhole.length <= 9) {
              msg.reply('please do not add reaction by yourself.');
            } else {
              weaponMenu(currentPage + 1, currentRarity, currentWeaponType);
            }
          }

          for (let i = 0; i < 9; i++) {
            const emoji = reactionNumberArray[i];
            if (chosen === emoji) {
              newMessage.delete();
              if (weaponArrayWhole.length < 1) {
                msg.reply('please do not add reaction by yourself.');
              } else {
                let field1 = '';
                let field2 = '';

                if (weaponArrayWhole[i][1] !== '-') {
                  field1 = {
                    name: weaponArrayWhole[i][1],
                    value: weaponArrayWhole[i][2],
                  };
                } else {
                  field1 = {
                    name: 'Skill',
                    value: 'None',
                  };
                }

                if (weaponArrayWhole[i][3] !== '-') {
                  field2 = {
                    name: weaponArrayWhole[i][3],
                    value: weaponArrayWhole[i][4],
                  };
                } else {
                  field2 = {
                    name: 'Skill',
                    value: 'None',
                  };
                }

                embed = {
                  author: {
                    name: titleForEmbed,
                    icon_url: `attachment://${authorImageAttachmentForEmbed.replace('images/equipment/weapon/', '')}`,
                  },
                  color: 6332693,
                  title: weaponArrayWhole[i][0],
                  thumbnail: {
                    url: weaponArrayWhole[i][5],
                  },
                  footer: {
                    icon_url: 'attachment://attentionicon.PNG',
                    text: 'All information from http://houkai3rd.arthobbylab.com/',
                  },
                  fields: [{
                    name: 'Attack',
                    value: weaponArrayWhole[i][6],
                    inline: true,
                  }, {
                    name: 'Critical',
                    value: weaponArrayWhole[i][7],
                    inline: true,
                  }, field1, field2],
                };
                msg.reply({
                  embed,
                  files: [{
                    attachment: authorImageAttachmentForEmbed,
                    name: authorImageAttachmentForEmbed.replace('images/equipment/weapon/', ''),
                  }, {
                    attachment: 'images/attentionicon.PNG',
                    name: 'attentionicon.PNG',
                  }],
                });
              }
            }
          }

          if (chosen === '❌') {
            newMessage.delete();
          }
          collector.stop();
        });

        if (page > 0) {
          await newMessage.react('◀').catch(() => {});
        }

        if (weaponArrayNameTemp.length > 9) {
          await newMessage.react('▶').catch(() => {});
        }

        if (weaponArrayNameTemp.length <= 9) {
          for (let i = 0; i < weaponArrayNameTemp.length; i++) {
            await newMessage.react(reactionNumberArray[i]).catch(() => {});
          }
        } else {
          for (let i = 0; i < 9; i++) {
            await newMessage.react(reactionNumberArray[i]).catch(() => {});
          }
        }

        await newMessage.react('❌').catch(() => {});

      });
    }

    function weaponRarity(weaponType) {

      let weaponTypeString = '';
      if (weaponType === 1) {
        weaponTypeString = 'Gun';
      }
      if (weaponType === 2) {
        weaponTypeString = 'Katana';
      }
      if (weaponType === 3) {
        weaponTypeString = 'Cannon';
      }
      if (weaponType === 4) {
        weaponTypeString = 'Greatsword';
      }
      if (weaponType === 5) {
        weaponTypeString = 'Cross';
      }
      if (weaponType === 6) {
        weaponTypeString = 'Gauntlet';
      }

      const embed = {
        author: {
          name: weaponTypeString,
        },
        color: 6332693,
        title: 'Select rarity',
        footer: {
          icon_url: 'attachment://attentionicon.PNG',
          text: 'Please press the number below (reaction) to select',
        },
        fields: [{
          name: '----------------',
          value: '1. ★★★★☆\n2. ★★★☆\n3. ★★☆\n4. ★☆',
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
        reaction.emoji.name === '4⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '▶' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '❌';
        const collector = newMessage.createReactionCollector(filter, { time: 30000 });
        newMessage.delete(30000).catch(() => {});
        collector.once('collect', async (reaction) => {
          const chosen = reaction.emoji.name;
          if (chosen === '1⃣') {
            newMessage.delete();
            weaponMenu(0, 1, weaponType);
          } else if (chosen === '2⃣') {
            newMessage.delete();
            weaponMenu(0, 2, weaponType);
          } else if (chosen === '3⃣') {
            newMessage.delete();
            weaponMenu(0, 3, weaponType);
          } else if (chosen === '4⃣') {
            newMessage.delete();
            if (weaponType !== 6) {
              weaponMenu(0, 4, weaponType);
            } else {
              msg.reply('There is no 1★ Gauntlet');
            }
          } else if (chosen === '❌') {
            newMessage.delete();
          }
          collector.stop();
        });
        await newMessage.react('1⃣').catch(() => {});
        await newMessage.react('2⃣').catch(() => {});
        await newMessage.react('3⃣').catch(() => {});
        await newMessage.react('4⃣').catch(() => {});
        await newMessage.react('❌').catch(() => {});
      });
    }

    function weaponList() {
      const embed = {
        author: {
          name: 'Weapon List',
        },
        color: 6332693,
        title: 'Please select a weapon type',
        footer: {
          icon_url: 'attachment://attentionicon.PNG',
          text: 'Please press the number below (reaction) to select',
        },
        fields: [{
          name: '----------------',
          value: '1. Gun\n2. Katana\n3. Cannon\n4. Greatsword\n5. Cross\n6. Gauntlet',
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
        reaction.emoji.name === '4⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '5⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '6⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '▶' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '❌';
        const collector = newMessage.createReactionCollector(filter, { time: 30000 });
        newMessage.delete(30000).catch(() => {});
        collector.once('collect', async (reaction) => {
          const chosen = reaction.emoji.name;
          if (chosen === '1⃣') {
            newMessage.delete();
            weaponRarity(1);
          } else if (chosen === '2⃣') {
            newMessage.delete();
            weaponRarity(2);
          } else if (chosen === '3⃣') {
            newMessage.delete();
            weaponRarity(3);
          } else if (chosen === '4⃣') {
            newMessage.delete();
            weaponRarity(4);
          } else if (chosen === '5⃣') {
            newMessage.delete();
            weaponRarity(5);
          } else if (chosen === '6⃣') {
            newMessage.delete();
            weaponRarity(6);
          } else if (chosen === '❌') {
            newMessage.delete();
          }
          collector.stop();
        });
        await newMessage.react('1⃣').catch(() => {});
        await newMessage.react('2⃣').catch(() => {});
        await newMessage.react('3⃣').catch(() => {});
        await newMessage.react('4⃣').catch(() => {});
        await newMessage.react('5⃣').catch(() => {});
        await newMessage.react('6⃣').catch(() => {});
        await newMessage.react('❌').catch(() => {});
      });
    }

    if (msg.content.startsWith('!weapon')) {
      weaponList();
    }

    function stigmataMenuSelected(star, page) {
      let selectedStarStigmata = '';
      const currentStar = star;
      const currentPage = page;
      if (currentStar === 4) {
        selectedStarStigmata = equipmentDatabase.equipment.stigmata.fourstar;
      }
      if (currentStar === 3) {
        selectedStarStigmata = equipmentDatabase.equipment.stigmata.threestar;
      }
      if (currentStar === 2) {
        selectedStarStigmata = equipmentDatabase.equipment.stigmata.twostar;
      }
      if (currentStar === 1) {
        selectedStarStigmata = equipmentDatabase.equipment.stigmata.onestar;
      }

      const stigmataArrayName = [];
      const stigmataArrayWhole = [];
      for (let i = 0; i < selectedStarStigmata.length; i++) {
        stigmataArrayName.push(selectedStarStigmata[i]);
        stigmataArrayWhole.push(selectedStarStigmata[i]);
      }

      const stigmataArrayNameTemp = stigmataArrayName;

      for (let i = 0; i < page; i++) {
        stigmataArrayNameTemp.splice(0, 9);
        stigmataArrayWhole.splice(0, 9);
      }

      const reactionNumberArray = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣'];


      let embedStigmataNames = '';
      if (stigmataArrayNameTemp.length > 9) {
        for (let i = 0; i < 9; i++) {
          embedStigmataNames += `${i + 1}. ${stigmataArrayNameTemp[i][3][0]}\n`;
        }
      } else {
        for (let i = 0; i < stigmataArrayNameTemp.length; i++) {
          embedStigmataNames += `${i + 1}. ${stigmataArrayNameTemp[i][3][0]}\n`;
        }
      }

      const totalPageNumber = Math.floor(selectedStarStigmata.length / 9) + 1;
      const currentPageDisplay = currentPage + 1;

      const embed = {
        color: 6332693,
        title: 'Select a stigmata',
        footer: {
          icon_url: 'attachment://attentionicon.PNG',
          text: `Page ${currentPageDisplay} of ${totalPageNumber} | Please press the number below (reaction) to select`,
        },
        fields: [{
          name: '----------------',
          value: `${embedStigmataNames}`,
        }],
      };
      msg.reply({
        embed,
      }).then(async (newMessage) => {
        const filter = (reaction, user) =>
          user.id === msg.author.id &&
        reaction.emoji.name === '◀' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '1⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '2⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '3⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '4⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '5⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '6⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '7⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '8⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '9⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '▶' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '❌';
        const collector = newMessage.createReactionCollector(filter, { time: 30000 });
        newMessage.delete(30000).catch(() => {});
        collector.once('collect', async (reaction) => {
          const chosen = reaction.emoji.name;
          if (chosen === '◀') {
            newMessage.delete();
            if (currentPage === 0) {
              msg.reply('please do not add reaction by yourself.');
            } else {
              stigmataMenuSelected(currentStar, currentPage - 1);
            }
          }

          if (chosen === '▶') {
            newMessage.delete();
            if (stigmataArrayNameTemp.length <= 9) {
              msg.reply('please do not add reaction by yourself.');
            } else {
              stigmataMenuSelected(currentStar, currentPage + 1);
            }
          }

          for (let i = 0; i < 9; i++) {
            const emoji = reactionNumberArray[i];
            const stigmataChosen = i;
            if (chosen === await emoji) {
              newMessage.delete();
              if (stigmataArrayWhole.length < 1) {
                msg.reply('please do not add reaction by yourself.');
              } else {

                if (stigmataArrayWhole[stigmataChosen][0][0] !== '-') {
                  // Top
                  await msg.reply({
                    embed: {
                      author: {
                        icon_url: 'attachment://top.PNG',
                        name: stigmataArrayWhole[stigmataChosen][0][0],
                      },
                      color: 16748921,
                      thumbnail: {
                        url: stigmataArrayWhole[stigmataChosen][0][6],
                      },
                      fields: [{
                        name: 'Effect',
                        value: stigmataArrayWhole[stigmataChosen][0][1],
                      }],
                    },
                    files: [{
                      attachment: 'images/equipment/stigmata/top.PNG',
                      name: 'top.PNG',
                    }],
                  });
                }

                if (stigmataArrayWhole[stigmataChosen][1][0] !== '-') {
                  // Middle
                  await msg.channel.send({
                    embed: {
                      author: {
                        icon_url: 'attachment://middle.PNG',
                        name: stigmataArrayWhole[stigmataChosen][1][0],
                      },
                      color: 10070783,
                      thumbnail: {
                        url: stigmataArrayWhole[stigmataChosen][1][6],
                      },
                      fields: [{
                        name: 'Effect',
                        value: stigmataArrayWhole[stigmataChosen][1][1],
                      }],
                    },
                    files: [{
                      attachment: 'images/equipment/stigmata/middle.PNG',
                      name: 'middle.PNG',
                    }],
                  });
                }

                if (stigmataArrayWhole[stigmataChosen][2][0] !== '-') {
                  // Bottom
                  await msg.channel.send({
                    embed: {
                      author: {
                        icon_url: 'attachment://bottom.PNG',
                        name: stigmataArrayWhole[stigmataChosen][2][0],
                      },
                      color: 11716965,
                      thumbnail: {
                        url: stigmataArrayWhole[stigmataChosen][2][6],
                      },
                      fields: [{
                        name: 'Effect',
                        value: stigmataArrayWhole[stigmataChosen][2][1],
                      }],
                    },
                    files: [{
                      attachment: 'images/equipment/stigmata/bottom.PNG',
                      name: 'bottom.PNG',
                    }],
                  });
                }


                if (stigmataArrayWhole[stigmataChosen][3][1] !== '-') {
                  // Set
                  await msg.channel.send({
                    embed: {
                      author: {
                        name: `${stigmataArrayWhole[stigmataChosen][3][0]} Set Effect`,
                      },
                      color: 16777215,
                      footer: {
                        icon_url: 'attachment://attentionicon.PNG',
                        text: 'All information from http://houkai3rd.arthobbylab.com/',
                      },
                      fields: [{
                        name: '2 Sets',
                        value: stigmataArrayWhole[stigmataChosen][3][2],
                      }, {
                        name: '3 Sets',
                        value: stigmataArrayWhole[stigmataChosen][3][4],
                      }],
                    },
                    files: [{
                      attachment: 'images/attentionicon.PNG',
                      name: 'attentionicon.PNG',
                    }],
                  });
                }


              }
            }
          }


          if (chosen === '❌') {
            newMessage.delete();
          }
          collector.stop();
        });

        if (page > 0) {
          await newMessage.react('◀').catch(() => {});
        }

        if (stigmataArrayNameTemp.length > 9) {
          await newMessage.react('▶').catch(() => {});
        }

        if (stigmataArrayNameTemp.length <= 9) {
          for (let i = 0; i < stigmataArrayNameTemp.length; i++) {
            await newMessage.react(reactionNumberArray[i]).catch(() => {});
          }
        } else {
          for (let i = 0; i < 9; i++) {
            await newMessage.react(reactionNumberArray[i]).catch(() => {});
          }
        }

        await newMessage.react('❌').catch(() => {});

      });

    }

    function stigmataMenu() {
      const embed = {
        author: {
          name: 'Stigmata',
        },
        color: 6332693,
        title: 'Select rarity',
        footer: {
          icon_url: 'attachment://attentionicon.PNG',
          text: 'Please press the number below (reaction) to select',
        },
        fields: [{
          name: '----------------',
          value: '1. ★★★★☆\n2. ★★★☆\n3. ★★☆\n4. ★☆',
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
        reaction.emoji.name === '4⃣' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '▶' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '❌';
        const collector = newMessage.createReactionCollector(filter, { time: 30000 });
        newMessage.delete(30000).catch(() => {});
        collector.once('collect', async (reaction) => {
          const chosen = reaction.emoji.name;
          if (chosen === '1⃣') {
            newMessage.delete();
            stigmataMenuSelected(4, 0);
          } else if (chosen === '2⃣') {
            newMessage.delete();
            stigmataMenuSelected(3, 0);
          } else if (chosen === '3⃣') {
            newMessage.delete();
            stigmataMenuSelected(2, 0);
          } else if (chosen === '4⃣') {
            newMessage.delete();
            stigmataMenuSelected(1, 0);
          } else if (chosen === '❌') {
            newMessage.delete();
          }
          collector.stop();
        });
        await newMessage.react('1⃣').catch(() => {});
        await newMessage.react('2⃣').catch(() => {});
        await newMessage.react('3⃣').catch(() => {});
        await newMessage.react('4⃣').catch(() => {});
        await newMessage.react('❌').catch(() => {});
      });
    }

    if (msg.content.startsWith('!stigmata')) {
      if (msg.content === '!stigmata') {
        stigmataMenu();
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
        newMessage.delete(30000).catch(() => {});
        collector.once('collect', async (reaction) => {
          const chosen = reaction.emoji.name;
          if (chosen === '1⃣') {
            newMessage.delete();
            weaponList();
          } else if (chosen === '2⃣') {
            newMessage.delete();
            stigmataMenu();
          } else if (chosen === '3⃣') {
            valkyrieList();
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

countFiles('images/random', (err, results) => {
  connectClient(results.files);
});
