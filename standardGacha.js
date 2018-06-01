const images = require('images');
const countFiles = require('count-files');

const standardGachaDatabase = require('./gachadb').standard;
const chatGacha = require('./chatdb').chat;

let resultArray = [];
let chatBoxChar = '';
let getSRankText = '';
let avatarRank = '';

let valkyrieDrawRate = 0.2;
let rareDrawRate = 0.73;
let superRareDrawRate = 0.073;
let superRareDrawRateGuaranteed = 0.1;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function drawItem() {
  let itemIndex = getRandomInt(1, 10);
  resultArray.push(`items/${itemIndex}.PNG`);
  return 0;
}

function drawValkyrieSRank() {
  const valkyrieIndex = getRandomInt(0, standardGachaDatabase.valk.s.length);
  resultArray.push(`valkyrie/${standardGachaDatabase.valk.s[valkyrieIndex]}`);
  return 10;
}

function drawValkyrieARank() {
  const valkyrieIndex = getRandomInt(0, standardGachaDatabase.valk.a.length);
  resultArray.push(`valkyrie/${standardGachaDatabase.valk.a[valkyrieIndex]}`);
  return 1;
}

function drawValkyrieBRank() {
  const valkyrieIndex = getRandomInt(0, standardGachaDatabase.valk.b.length);
  resultArray.push(`valkyrie/${standardGachaDatabase.valk.b[valkyrieIndex]}`);
  return 1;
}

function drawValkyrie() {
  const gachaRate = Math.floor(Math.random() * 100) / 100;
  if (gachaRate < superRareDrawRate) {
    return drawValkyrieSRank();
  } else if (rate < rareDrawRate) {
    return drawValkyrieARank();
  } else {
    return drawValkyrieBRank();
  }
}

function drawValkyrieGuaranteed() {
  const gachaRate = Math.floor(Math.random() * 100) / 100;
  if (gachaRate < superRareDrawRateGuaranteed) {
    return drawValkyrieSRank();
  } else {
    return drawValkyrieARank();
  }
}

function gachaDraw() {
  const gachaRate = Math.floor(Math.random() * 100) / 100;
  if (gachaRate <= valkyrieDrawRate) {    
    return drawValkyrie();
  } else {
    return drawItem();
  }
}

function fileCount(rareDrawPoints) {
  resultArray.sort().reverse();
  const rand = getRandomInt(0, chatGacha.character.length);
  chatBoxChar = chatGacha.character[rand];
  getSRankText = '';
  avatarRank = '';
  if (rareDrawPoints > 9) {
    getSRankText = 'srank';
    avatarRank = 'Savatar.PNG';
  } else {
    getSRankText = 'nosrank';
    avatarRank = 'avatar.PNG';
  }
  return new Promise(((resolve) => {
    countFiles(`images/chat/${chatBoxChar}/${getSRankText}`, (err, results) => {
      if (results.files !== 0) {
        resolve(results.files);
      }
    });
  }));
}

function generateImage(valkyrieChatNumber) {
  chatBoxNumber = getRandomInt(1, valkyrieChatNumber + 1);
  return new Promise(((resolve) => {
    images('input.jpg')
      .size(1280, 950)
      .draw(images(`images/${resultArray[0]}`).size(160, 160), 174, 386)
      .draw(images(`images/${resultArray[1]}`).size(160, 160), 372, 386)
      .draw(images(`images/${resultArray[2]}`).size(160, 160), 567, 386)
      .draw(images(`images/${resultArray[3]}`).size(160, 160), 760, 386)
      .draw(images(`images/${resultArray[4]}`).size(160, 160), 950, 386)
      .draw(images(`images/${resultArray[5]}`).size(160, 160), 174, 576)
      .draw(images(`images/${resultArray[6]}`).size(160, 160), 372, 576)
      .draw(images(`images/${resultArray[7]}`).size(160, 160), 567, 576)
      .draw(images(`images/${resultArray[8]}`).size(160, 160), 760, 576)
      .draw(images(`images/${resultArray[9]}`).size(160, 160), 950, 576)
      .draw(images(`images/chat/${chatBoxChar}/${getSRankText}/${chatBoxNumber}.PNG`).size(989, 276), 0, 680)
      .draw(images(`images/chat/${chatBoxChar}/${avatarRank}`).size(242, 276), 0, 680)
      .save('output.jpg', {
        quality: 50,
      });
    if (images.getUsedMemory() !== 0) {
      resolve(images.getUsedMemory());
    }
  }));
}

async function gachaStart() {
  let i = 0;
  let randomDrawLimit = 9;
  let rareDrawPoints = 0;

  resultArray = [];
  for (i; i < randomDrawLimit; ++i) {
    rareDrawPoints += gachaDraw();
  }
  
  if (rareDrawPoints === 0) {
    rareDrawPoints += drawValkyrieGuaranteed();
  } else {
    rareDrawPoints += gachaDraw();
  }
  const counted = await fileCount(rareDrawPoints);
  await generateImage(counted);
  return new Promise(((resolve) => {
    resolve('done');
  }));
}

exports.gachaStart = gachaStart;