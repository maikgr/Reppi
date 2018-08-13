const stigmataDB = require('../database/equipmentdb.json').stigmata;

function stigmataMenuSelected(star, page, msg) {
	let stigmataArrayWhole = [];
	const reactionNumberArray = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣'];
	for (i = 0; i < stigmataDB.length; i++) {
		if (stigmataDB[i]['rarity'] === star) {
			stigmataArrayWhole.push(stigmataDB[i]['name']);
		}
	}
	stigmataArrayWhole = stigmataDuplicateFilter(stigmataArrayWhole);

	const totalPageNumber = Math.floor(stigmataArrayWhole.length / 9) + 1;
	const currentPageDisplay = page + 1;

	for (let i = 0; i < page; i++) {
		stigmataArrayWhole.splice(0, 9);
	}

	let embedStigmataNames = '';
	if (stigmataArrayWhole.length > 9) {
		for (let i = 0; i < 9; i++) {
			embedStigmataNames += `${i + 1}. ${stigmataArrayWhole[i]}\n`;
		}
	} else {
		for (let i = 0; i < stigmataArrayWhole.length; i++) {
			embedStigmataNames += `${i + 1}. ${stigmataArrayWhole[i]}\n`;
		}
	}

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
		const collector = newMessage.createReactionCollector(filter, {
			time: 30000
		});
		newMessage.delete(30000).catch(() => {});

		collector.once('collect', async (reaction) => {
			const chosen = reaction.emoji.name;
			if (chosen === '◀') {
				newMessage.delete();
				if (page === 0) {
					msg.reply('please do not add reaction by yourself.');
				} else {
					stigmataMenuSelected(star, page - 1, msg);
				}
			}

			if (chosen === '▶') {
				newMessage.delete();
				if (stigmataArrayWhole.length <= 9) {
					msg.reply('please do not add reaction by yourself.');
				} else {
					stigmataMenuSelected(star, page + 1, msg);
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
						stigmataSelectedTop = null;
						stigmataSelectedMiddle = null;
						stigmataSelectedBottom = null;
						stigmataSelectedSet = null;
						for (i2 = 0; i2 < stigmataDB.length; i2++) {
							if (stigmataDB[i2]['name'] === stigmataArrayWhole[stigmataChosen]) {
								if (stigmataDB[i2]['type'] === 'top') {
									stigmataSelectedTop = stigmataDB[i2];
								}
								if (stigmataDB[i2]['type'] === 'mid') {
									stigmataSelectedMiddle = stigmataDB[i2];
								}
								if (stigmataDB[i2]['type'] === 'bottom') {
									stigmataSelectedBottom = stigmataDB[i2];
								}
								if (stigmataDB[i2]['type'] === 'set') {
									stigmataSelectedSet = stigmataDB[i2];
								}
							}
						}

						if (stigmataSelectedTop !== null) {
							await msg.reply({
								embed: {
									author: {
										icon_url: 'attachment://top.PNG',
										name: stigmataSelectedTop['name'],
									},
									color: 16748921,
									thumbnail: {
										url: stigmataSelectedTop['image'],
									},
									fields: [{
										name: 'Effect',
										value: stigmataSelectedTop['skill'],
									}],
								},
								files: [{
									attachment: 'src/images/equipment/stigmata/top.PNG',
									name: 'top.PNG',
								}],
							});
						}

						if (stigmataSelectedMiddle !== null) {
							await msg.channel.send({
								embed: {
									author: {
										icon_url: 'attachment://middle.PNG',
										name: stigmataSelectedMiddle['name'],
									},
									color: 16748921,
									thumbnail: {
										url: stigmataSelectedMiddle['image'],
									},
									fields: [{
										name: 'Effect',
										value: stigmataSelectedMiddle['skill'],
									}],
								},
								files: [{
									attachment: 'src/images/equipment/stigmata/middle.PNG',
									name: 'middle.PNG',
								}],
							});
						}

						if (stigmataSelectedBottom !== null) {
							await msg.channel.send({
								embed: {
									author: {
										icon_url: 'attachment://bottom.PNG',
										name: stigmataSelectedBottom['name'],
									},
									color: 16748921,
									thumbnail: {
										url: stigmataSelectedBottom['image'],
									},
									fields: [{
										name: 'Effect',
										value: stigmataSelectedBottom['skill'],
									}],
								},
								files: [{
									attachment: 'src/images/equipment/stigmata/bottom.PNG',
									name: 'bottom.PNG',
								}],
							});
						}

						if (stigmataSelectedSet !== null) {
							await msg.channel.send({
								embed: {
									author: {
										name: `${stigmataSelectedSet['name']} Set Effect`,
									},
									color: 16777215,
									footer: {
										icon_url: 'attachment://attentionicon.PNG',
										text: 'All information from http://houkai3rd.arthobbylab.com/',
									},
									fields: [{
										name: '2 Sets',
										value: stigmataSelectedSet['set1'],
									}, {
										name: '3 Sets',
										value: stigmataSelectedSet['set2'],
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
			await newMessage.react('◀').catch(() => {});
		}

		if (stigmataArrayWhole.length > 9) {
			await newMessage.react('▶').catch(() => {});
		}

		if (stigmataArrayWhole.length <= 9) {
			for (let i = 0; i < stigmataArrayWhole.length; i++) {
				await newMessage.react(reactionNumberArray[i]).catch(() => {});
			}
		} else {
			for (let i = 0; i < 9; i++) {
				await newMessage.react(reactionNumberArray[i]).catch(() => {});
			}
		}

		await newMessage.react('❌').catch(() => {});
	});

	//=======
}

function stigmataDuplicateFilter(stigmataArrayWhole) {
	let stigmataArrayWholeFiltered = [];
	for (i = 0; i < stigmataArrayWhole.length; i++) {
		if (stigmataArrayWhole[i] != stigmataArrayWhole[i + 1]) {
			stigmataArrayWholeFiltered.push(stigmataArrayWhole[i]);
		}
	}
	return stigmataArrayWholeFiltered;
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
		const collector = newMessage.createReactionCollector(filter, {
			time: 30000
		});
		newMessage.delete(30000).catch(() => {});
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
		await newMessage.react('1⃣').catch(() => {});
		await newMessage.react('2⃣').catch(() => {});
		await newMessage.react('3⃣').catch(() => {});
		await newMessage.react('4⃣').catch(() => {});
		await newMessage.react('❌').catch(() => {});
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
		const collector = newMessage.createReactionCollector(filter, {
			time: 30000
		});
		newMessage.delete(30000).catch(() => {});
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
			await newMessage.react(reactionNumberArray[i]).catch(() => {});
		}

		await newMessage.react('❌').catch(() => {});

	});
}

async function filterMessageToRegex(query) {
	const queryConvertedEscapes = query.replace(/[^a-zA-Z0-9]/g, ' ');
	const queryConvertedSpace = queryConvertedEscapes.replace(/ /g, ')(?=.*');
	const queryConvertedBeginningEnd = `${queryConvertedSpace.replace(/^/g, '(?=.*')})`;

	return new RegExp(queryConvertedBeginningEnd, 'i');
}

async function stigmataSearch(msg) {
	const query = msg.content.substr(msg.content.indexOf(' ') + 1);
	if (query.length <= 2) {
		msg.reply('Please search with atleast 3 characters!');
	} else {
		const regex = await filterMessageToRegex(query);
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

		console.log(result);

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
		}
		if (result.length > 4 && result.length < 37) {
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