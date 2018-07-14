const equipmentDatabase = require('../database/equipmentdb.js');
const stigmataDB = require('../database/equipmentdb2.json').stigmata;

function stigmataMenuSelected(star, page, msg) {
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
    newMessage.delete(30000).catch(() => { });
    collector.once('collect', async (reaction) => {
      const chosen = reaction.emoji.name;
      if (chosen === '◀') {
        newMessage.delete();
        if (currentPage === 0) {
          msg.reply('please do not add reaction by yourself.');
        } else {
          stigmataMenuSelected(currentStar, currentPage - 1, msg);
        }
      }

      if (chosen === '▶') {
        newMessage.delete();
        if (stigmataArrayNameTemp.length <= 9) {
          msg.reply('please do not add reaction by yourself.');
        } else {
          stigmataMenuSelected(currentStar, currentPage + 1, msg);
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
                  attachment: 'src/images/equipment/stigmata/top.PNG',
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
                  attachment: 'src/images/equipment/stigmata/middle.PNG',
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
                  attachment: 'src/images/equipment/stigmata/bottom.PNG',
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
                  attachment: 'src/images/attentionicon.PNG',
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
      await newMessage.react('◀').catch(() => { });
    }

    if (stigmataArrayNameTemp.length > 9) {
      await newMessage.react('▶').catch(() => { });
    }

    if (stigmataArrayNameTemp.length <= 9) {
      for (let i = 0; i < stigmataArrayNameTemp.length; i++) {
        await newMessage.react(reactionNumberArray[i]).catch(() => { });
      }
    } else {
      for (let i = 0; i < 9; i++) {
        await newMessage.react(reactionNumberArray[i]).catch(() => { });
      }
    }

    await newMessage.react('❌').catch(() => { });

  });

}

function stigmataMenu(msg) {
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
        reaction.emoji.name === '▶' ||
        user.id === msg.author.id &&
        reaction.emoji.name === '❌';
    const collector = newMessage.createReactionCollector(filter, { time: 30000 });
    newMessage.delete(30000).catch(() => { });
    collector.once('collect', async (reaction) => {
      const chosen = reaction.emoji.name;
      if (chosen === '1⃣') {
        newMessage.delete();
        stigmataMenuSelected(4, 0, msg);
      } else if (chosen === '2⃣') {
        newMessage.delete();
        stigmataMenuSelected(3, 0, msg);
      } else if (chosen === '3⃣') {
        newMessage.delete();
        stigmataMenuSelected(2, 0, msg);
      } else if (chosen === '4⃣') {
        newMessage.delete();
        stigmataMenuSelected(1, 0, msg);
      } else if (chosen === '❌') {
        newMessage.delete();
      }
      collector.stop();
    });
    await newMessage.react('1⃣').catch(() => { });
    await newMessage.react('2⃣').catch(() => { });
    await newMessage.react('3⃣').catch(() => { });
    await newMessage.react('4⃣').catch(() => { });
    await newMessage.react('❌').catch(() => { });
  });
}

async function stigmataSearchMenu(indexes, msg) {
  const result = [];
  const reactionNumberArray = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣'];
  for (let i = 0; i < indexes.length; i++) {
    result.push(stigmataDB[indexes[i]]);
  }

  let embedStigmataName = '';
  let beginningNumber = 0;
  const resultIndex = [];
  for (let i = 0; i < result.length; i++) {
    if (embedStigmataName === '') {
      beginningNumber += 1;
      embedStigmataName += `${beginningNumber}. ${result[i].name}\n`;
      resultIndex.push(indexes[i]);
    } else if (result[i].name !== result[i - 1].name) {
      beginningNumber += 1;
      embedStigmataName += `${beginningNumber}. ${result[i].name}\n`;
      resultIndex.push(indexes[i]);
    }

  }

  const embed = {
    author: {
      name: 'Stigmata search result',
    },
    color: 6332693,
    title: 'Select a stigmata',
    footer: {
      icon_url: 'attachment://attentionicon.PNG',
      text: 'Please press the number below (reaction) to select',
    },
    fields: [{
      name: '----------------',
      value: `${embedStigmataName}`,
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

      for (let i = 0; i < beginningNumber; i++) {
        const emoji = reactionNumberArray[i];
        if (chosen === emoji) {
          newMessage.delete();
          if (stigmataDB[resultIndex[i] + 1] === undefined) {
            let authorIcon = '';
            let stigmataColor = '';
            if (stigmataDB[resultIndex[i]].type === 'top') {
              authorIcon = 'top.PNG';
              stigmataColor = 16748921;
            }
            if (stigmataDB[resultIndex[i]].type === 'mid') {
              authorIcon = 'middle.PNG';
              stigmataColor = 10070783;
            }
            if (stigmataDB[resultIndex[i]].type === 'bottom') {
              authorIcon = 'bottom.PNG';
              stigmataColor = 11716965;
            }
            await msg.channel.send({
              embed: {
                author: {
                  icon_url: `attachment://${authorIcon}`,
                  name: stigmataDB[resultIndex[i]].name,
                },
                color: stigmataColor,
                thumbnail: {
                  url: stigmataDB[resultIndex[i]].image,
                },
                fields: [{
                  name: 'Effect',
                  value: stigmataDB[resultIndex[i]].skill,
                }],
              },
              files: [{
                attachment: `src/images/equipment/stigmata/${authorIcon}`,
                name: authorIcon,
              }],
            });
          } else if (stigmataDB[resultIndex[i]].name === stigmataDB[resultIndex[i] + 1].name) {
            await msg.channel.send({
              embed: {
                author: {
                  icon_url: 'attachment://top.PNG',
                  name: stigmataDB[resultIndex[i]].name,
                },
                color: 16748921,
                thumbnail: {
                  url: stigmataDB[resultIndex[i]].image,
                },
                fields: [{
                  name: 'Effect',
                  value: stigmataDB[resultIndex[i]].skill,
                }],
              },
              files: [{
                attachment: 'src/images/equipment/stigmata/top.PNG',
                name: 'top.PNG',
              }],
            });
            await msg.channel.send({
              embed: {
                author: {
                  icon_url: 'attachment://middle.PNG',
                  name: stigmataDB[resultIndex[i] + 1].name,
                },
                color: 10070783,
                thumbnail: {
                  url: stigmataDB[resultIndex[i] + 1].image,
                },
                fields: [{
                  name: 'Effect',
                  value: stigmataDB[resultIndex[i] + 1].skill,
                }],
              },
              files: [{
                attachment: 'src/images/equipment/stigmata/middle.PNG',
                name: 'middle.PNG',
              }],
            });
            await msg.channel.send({
              embed: {
                author: {
                  icon_url: 'attachment://bottom.PNG',
                  name: stigmataDB[resultIndex[i] + 2].name,
                },
                color: 11716965,
                thumbnail: {
                  url: stigmataDB[resultIndex[i] + 2].image,
                },
                fields: [{
                  name: 'Effect',
                  value: stigmataDB[resultIndex[i] + 2].skill,
                }],
              },
              files: [{
                attachment: 'src/images/equipment/stigmata/bottom.PNG',
                name: 'bottom.PNG',
              }],
            });
            msg.channel.send({
              embed: {
                author: {
                  name: stigmataDB[resultIndex[i] + 3].name,
                },
                color: 16777215,
                footer: {
                  icon_url: 'attachment://attentionicon.PNG',
                  text: 'All information from http://houkai3rd.arthobbylab.com/',
                },
                fields: [{
                  name: '2 Sets',
                  value: stigmataDB[resultIndex[i] + 3].set1,
                }, {
                  name: '3 Sets',
                  value: stigmataDB[resultIndex[i] + 3].set2,
                }],
              },
              files: [{
                attachment: 'src/images/attentionicon.PNG',
                name: 'attentionicon.PNG',
              }],
            });
          } else {
            let authorIcon = '';
            let stigmataColor = '';
            if (stigmataDB[resultIndex[i]].type === 'top') {
              authorIcon = 'top.PNG';
              stigmataColor = 16748921;
            }
            if (stigmataDB[resultIndex[i]].type === 'mid') {
              authorIcon = 'middle.PNG';
              stigmataColor = 10070783;
            }
            if (stigmataDB[resultIndex[i]].type === 'bottom') {
              authorIcon = 'bottom.PNG';
              stigmataColor = 11716965;
            }
            await msg.channel.send({
              embed: {
                author: {
                  icon_url: `attachment://${authorIcon}`,
                  name: stigmataDB[resultIndex[i]].name,
                },
                color: stigmataColor,
                thumbnail: {
                  url: stigmataDB[resultIndex[i]].image,
                },
                fields: [{
                  name: 'Effect',
                  value: stigmataDB[resultIndex[i]].skill,
                }],
              },
              files: [{
                attachment: `src/images/equipment/stigmata/${authorIcon}`,
                name: authorIcon,
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

    for (let i = 0; i < beginningNumber; i++) {
      await newMessage.react(reactionNumberArray[i]).catch(() => { });
    }

    await newMessage.react('❌').catch(() => { });

  });

}

async function stigmataSearch(msg) {
  const query = msg.content.substr(msg.content.indexOf(' ') + 1);
  if (query.length <= 2) {
    msg.reply('Please search with atleast 3 characters!');
  } else {
    const queryConvertedEscapes = query.replace(/[^a-zA-Z0-9]/g, ' ');
    const queryConvertedSpace = queryConvertedEscapes.replace(/ /g, ')(?=.*');
    const queryConvertedBeginningEnd = `${queryConvertedSpace.replace(/^/g, '(?=.*')})`;

    const regex = new RegExp(queryConvertedBeginningEnd, 'i');
    const indexes = [];
    for (let i = 0; i < stigmataDB.length; i++) {
      if (JSON.stringify(stigmataDB[i].name).match(regex)) {
        indexes.push(i);
      }
    }
    const result = [];
    for (let i = 0; i < indexes.length; i++) {
      result.push(stigmataDB[indexes[i]]);
    }

    if (result.length < 5 && result.length > 3) {
      if (indexes[0] + 1 === indexes[1]) {
        for (let i = 0; i < 3; i++) {
          let authorIcon = '';
          let stigmataColor = '';
          if (i === 0) {
            authorIcon = 'top.PNG';
            stigmataColor = 16748921;
          }
          if (i === 1) {
            authorIcon = 'middle.PNG';
            stigmataColor = 10070783;
          }
          if (i === 2) {
            authorIcon = 'bottom.PNG';
            stigmataColor = 11716965;
          }
          if (stigmataDB[indexes[i]].name !== '-') {
            await msg.channel.send({
              embed: {
                author: {
                  icon_url: `attachment://${authorIcon}`,
                  name: stigmataDB[indexes[i]].name,
                },
                color: stigmataColor,
                thumbnail: {
                  url: stigmataDB[indexes[i]].image,
                },
                fields: [{
                  name: 'Effect',
                  value: stigmataDB[indexes[i]].skill,
                }],
              },
              files: [{
                attachment: `src/images/equipment/stigmata/${authorIcon}`,
                name: authorIcon,
              }],
            });
          }
        }

        if (stigmataDB[indexes[3]].name !== '-') {
          msg.channel.send({
            embed: {
              author: {
                name: stigmataDB[indexes[3]].name,
              },
              color: 16777215,
              footer: {
                icon_url: 'attachment://attentionicon.PNG',
                text: 'All information from http://houkai3rd.arthobbylab.com/',
              },
              fields: [{
                name: '2 Sets',
                value: stigmataDB[indexes[3]].set1,
              }, {
                name: '3 Sets',
                value: stigmataDB[indexes[3]].set2,
              }],
            },
            files: [{
              attachment: 'src/images/attentionicon.PNG',
              name: 'attentionicon.PNG',
            }],
          });
        }
      } else {
        stigmataSearchMenu(indexes, msg);
      }
    } if (result.length > 4 && result.length < 37) {
      stigmataSearchMenu(indexes, msg);
    } else if (result.length > 36) {
      msg.reply('Too many results! Be specific with your search!');
    } else if (result.length > 0 && result.length < 2) {
      let authorIcon = '';
      let stigmataColor = '';
      if (stigmataDB[indexes[0]].type === 'top') {
        authorIcon = 'top.PNG';
        stigmataColor = 16748921;
      }
      if (stigmataDB[indexes[0]].type === 'mid') {
        authorIcon = 'middle.PNG';
        stigmataColor = 10070783;
      }
      if (stigmataDB[indexes[0]].type === 'bottom') {
        authorIcon = 'bottom.PNG';
        stigmataColor = 11716965;
      }
      if (stigmataDB[indexes[0]].name !== '-') {
        await msg.channel.send({
          embed: {
            author: {
              icon_url: `attachment://${authorIcon}`,
              name: stigmataDB[indexes[0]].name,
            },
            color: stigmataColor,
            thumbnail: {
              url: stigmataDB[indexes[0]].image,
            },
            fields: [{
              name: 'Effect',
              value: stigmataDB[indexes[0]].skill,
            }],
          },
          files: [{
            attachment: `src/images/equipment/stigmata/${authorIcon}`,
            name: authorIcon,
          }],
        });
      }
    } else if (result.length < 1) {
      msg.reply('Stigmata not found!');
    } else if (result.length > 1 && result.length < 4) {
      stigmataSearchMenu(indexes, msg);
    }
  }
}

exports.stigmataMenu = stigmataMenu;
exports.stigmataSearch = stigmataSearch;
