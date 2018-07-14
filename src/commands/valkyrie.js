const valkyrieDB = require('../database/equipmentdb2.json').valkyrie;

function valkyrieSelectedClass(valkyrieNum, valkyrieChosenClass, msg) {
  if (valkyrieNum === 1) {
    if (valkyrieChosenClass === 1) {
      msg.reply('', { file: 'src/images/valkyriedetails/whitecomet.PNG' });
    } if (valkyrieChosenClass === 2) {
      msg.reply('', { file: 'src/images/valkyriedetails/ranger.PNG' });
    } if (valkyrieChosenClass === 3) {
      msg.reply('', { file: 'src/images/valkyriedetails/divineprayer.PNG' });
    } if (valkyrieChosenClass === 4) {
      msg.reply('', { file: 'src/images/valkyriedetails/moonbeam.PNG' });
    }
  }

  if (valkyrieNum === 2) {
    if (valkyrieChosenClass === 1) {
      msg.reply('', { file: 'src/images/valkyriedetails/crimsonimpulse.PNG' });
    } if (valkyrieChosenClass === 2) {
      msg.reply('', { file: 'src/images/valkyriedetails/shadowdash.PNG' });
    } if (valkyrieChosenClass === 3) {
      msg.reply('', { file: 'src/images/valkyriedetails/striker.PNG' });
    } if (valkyrieChosenClass === 4) {
      msg.reply('', { file: 'src/images/valkyriedetails/lightningempress.PNG' });
    }
  }

  if (valkyrieNum === 3) {
    if (valkyrieChosenClass === 1) {
      msg.reply('', { file: 'src/images/valkyriedetails/chariot.PNG' });
    } if (valkyrieChosenClass === 2) {
      msg.reply('', { file: 'src/images/valkyriedetails/yamabuki.PNG' });
    } if (valkyrieChosenClass === 3) {
      msg.reply('', { file: 'src/images/valkyriedetails/snowy.PNG' });
    } if (valkyrieChosenClass === 4) {
      msg.reply('', { file: 'src/images/valkyriedetails/dimensionalbreak.PNG' });
    } if (valkyrieChosenClass === 5) {
      msg.reply('', { file: 'src/images/valkyriedetails/wolf.PNG' });
    } if (valkyrieChosenClass === 6) {
      msg.reply('', { file: 'src/images/valkyriedetails/blacknucleus.PNG' });
    }
  }

  if (valkyrieNum === 4) {
    if (valkyrieChosenClass === 1) {
      msg.reply('', { file: 'src/images/valkyriedetails/battlestorm.PNG' });
    } if (valkyrieChosenClass === 2) {
      msg.reply('', { file: 'src/images/valkyriedetails/triumph.PNG' });
    } if (valkyrieChosenClass === 3) {
      msg.reply('', { file: 'src/images/valkyriedetails/scarletfusion.PNG' });
    } if (valkyrieChosenClass === 4) {
      msg.reply('', { file: 'src/images/valkyriedetails/bloodrose.PNG' });
    }
  }

  if (valkyrieNum === 5) {
    if (valkyrieChosenClass === 1) {
      msg.reply('', { file: 'src/images/valkyriedetails/miko.PNG' });
    } if (valkyrieChosenClass === 2) {
      msg.reply('', { file: 'src/images/valkyriedetails/firesaku.PNG' });
    } if (valkyrieChosenClass === 3) {
      msg.reply('', { file: 'src/images/valkyriedetails/unforgottenapostle.PNG' });
    }
  }

  if (valkyrieNum === 6) {
    if (valkyrieChosenClass === 1) {
      msg.reply('', { file: 'src/images/valkyriedetails/pledge.PNG' });
    } if (valkyrieChosenClass === 2) {
      msg.reply('', { file: 'src/images/valkyriedetails/rondo.PNG' });
    } if (valkyrieChosenClass === 3) {
      msg.reply('', { file: 'src/images/valkyriedetails/violetexecuter.PNG' });
    } if (valkyrieChosenClass === 4) {
      msg.reply('', { file: 'src/images/valkyriedetails/anthem.PNG' });
    }
  }

  if (valkyrieNum === 7) {
    if (valkyrieChosenClass === 1) {
      msg.reply('', { file: 'src/images/valkyriedetails/kallen.PNG' });
    }
  }

  if (valkyrieNum === 8) {
    if (valkyrieChosenClass === 1) {
      msg.reply('', { file: 'src/images/valkyriedetails/accipiter.PNG' });
    } if (valkyrieChosenClass === 2) {
      msg.reply('', { file: 'src/images/valkyriedetails/shadowknight.PNG' });
    }
  }
}

function valkyrieSelected(valkyrieNum, msg) {
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
        value: '1. Accipiter\n2. Shadow Knight',
      }],
    };
    total = 2;
  }

  const reactionNumberArrayValkyrie = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣'];

  msg.reply({
    embed,
    files: [{
      attachment: 'src/images/attentionicon.PNG',
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
    newMessage.delete(30000).catch(() => { });
    collector.once('collect', async (reaction) => {
      const chosen = reaction.emoji.name;
      for (let i = 0; i < total; i++) {
        const emoji = reactionNumberArrayValkyrie[i];
        const valkyrieChosenClass = i;
        if (chosen === await emoji) {
          newMessage.delete();
          valkyrieSelectedClass(valkyrieNum, valkyrieChosenClass + 1, msg);
        }
      }
      if (chosen === '❌') {
        newMessage.delete();
      }
      collector.stop();
    });
    for (let i = 0; i < total; i++) {
      const emoji = reactionNumberArrayValkyrie[i];
      await newMessage.react(emoji).catch(() => { });
    }
    await newMessage.react('❌').catch(() => { });
  });

}

function valkyrieList(msg) {
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
    newMessage.delete(30000).catch(() => { });
    collector.once('collect', async (reaction) => {
      const chosen = reaction.emoji.name;
      for (let i = 0; i < 8; i++) {
        const emoji = reactionNumberArrayValkyrie[i];
        if (chosen === await emoji) {
          newMessage.delete();
          valkyrieSelected(i + 1, msg);
        }
      }

      if (chosen === '❌') {
        newMessage.delete();
      }
      collector.stop();
    });
    await newMessage.react('1⃣').catch(() => { });
    await newMessage.react('2⃣').catch(() => { });
    await newMessage.react('3⃣').catch(() => { });
    await newMessage.react('4⃣').catch(() => { });
    await newMessage.react('5⃣').catch(() => { });
    await newMessage.react('6⃣').catch(() => { });
    await newMessage.react('7⃣').catch(() => { });
    await newMessage.react('8⃣').catch(() => { });
    await newMessage.react('❌').catch(() => { });
  });
}

function valkyrieSearch(msg) {
  const query = msg.content.substr(msg.content.indexOf(' ') + 1);
  if (query.length <= 2) {
    msg.reply('Please search with atleast 3 characters!');
  } else {
    const queryConvertedEscapes = query.replace(/[^a-zA-Z0-9]/g, ' ');
    const queryConvertedSpace = queryConvertedEscapes.replace(/ /g, ')(?=.*');
    const queryConvertedBeginningEnd = `${queryConvertedSpace.replace(/^/g, '(?=.*')})`;


    const regex = new RegExp(queryConvertedBeginningEnd, 'i');
    const indexes = [];
    for (let i = 0; i < valkyrieDB.length; i++) {
      if (JSON.stringify(valkyrieDB[i].name).match(regex)) {
        indexes.push(i);
      }
    }
    const result = [];
    for (let i = 0; i < indexes.length; i++) {
      result.push(valkyrieDB[indexes[i]]);
    }

    if (result.length < 2 && result.length > 0) {
      msg.reply('', { file: valkyrieDB[indexes[0]].image });
    } else if (result.length > 1 && result.length < 10) {
      const reactionNumberArray = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣'];
      let embedValkyrieNames = '';

      for (let i = 0; i < result.length; i++) {
        embedValkyrieNames += `${i + 1}. ${valkyrieDB[indexes[i]].name}\n`;
      }

      const embed = {
        author: {
          name: 'Valkyrie search result',
        },
        color: 6332693,
        title: 'Select a valkyrie',
        footer: {
          icon_url: 'attachment://attentionicon.PNG',
          text: 'Please press the number below (reaction) to select',
        },
        fields: [{
          name: '----------------',
          value: `${embedValkyrieNames}`,
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
          reaction.emoji.name === '❌';
        const collector = newMessage.createReactionCollector(filter, { time: 30000 });
        newMessage.delete(30000).catch(() => { });
        collector.once('collect', async (reaction) => {
          const chosen = reaction.emoji.name;
          for (let i = 0; i < result.length; i++) {
            const emoji = reactionNumberArray[i];
            if (chosen === emoji) {
              newMessage.delete();
              if (result.length < 1) {
                msg.reply('please do not add reaction by yourself.');
              } else {
                msg.reply('', { file: valkyrieDB[indexes[i]].image });
              }
            }
          }

          if (chosen === '❌') {
            newMessage.delete();
          }
          collector.stop();
        });

        for (let i = 0; i < result.length; i++) {
          await newMessage.react(reactionNumberArray[i]).catch(() => { });
        }

        await newMessage.react('❌').catch(() => { });

      });

    } else if (result.length > 9) {
      msg.reply('Too many results! Be specific with your search!');
    } else if (result.length < 1) {
      msg.reply('No valkyrie found.');
    }
  }
}

exports.valkyrieList = valkyrieList;
exports.valkyrieSearch = valkyrieSearch;
