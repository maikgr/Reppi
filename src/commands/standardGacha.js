const images = require('images');
const standardGachaDatabase = require('../database/gachadb').standard;
const chatGacha = require('../database/chatdb').chat;

let guaranteed = 0;
let resultArray = [];
let getSRank = 0;
let chatBoxNumber = 0;
let itemNumber = 0;
let chatBoxChar = '';
let getSRankText = '';
let avatarRank = '';

function getRandomInt(min, max) {
  const intMin = parseInt(min);
  const intMax = parseInt(max);
  return (Math.floor(Math.random() * (intMax - intMin)) + intMin);
}

function drawItem() {
  itemNumber = 0;
  itemNumber = getRandomInt(1, 10);
  resultArray.push(`items/${itemNumber}.PNG`);
}

function drawValkyrieSRank() {
  const rand = getRandomInt(0, standardGachaDatabase.valk.s.length);
  resultArray.push(`valkyrie/${standardGachaDatabase.valk.s[rand]}`);
}

function drawValkyrieARank() {
  const rand = getRandomInt(0, standardGachaDatabase.valk.a.length);
  resultArray.push(`valkyrie/${standardGachaDatabase.valk.a[rand]}`);
}

function drawValkyrieBRank() {
  const rand = getRandomInt(0, standardGachaDatabase.valk.b.length);
  resultArray.push(`valkyrie/${standardGachaDatabase.valk.b[rand]}`);
}

function drawValkyrie() {
  const rate = Math.floor(Math.random() * 100) / 100;
  if (rate < 0.073) {
    drawValkyrieSRank();
    getSRank++;
  } else if (rate < 0.73) {
    drawValkyrieARank();
  } else {
    drawValkyrieBRank();
    guaranteed++;
  }
}

function drawValkyrieGuaranteed() {
  const rate = Math.floor(Math.random() * 100) / 100;
  if (rate < 0.1) {
    drawValkyrieSRank();
    getSRank++;
  } else {
    drawValkyrieARank();
  }
}

function gachaDraw() {
  const gachaRate = Math.floor(Math.random() * 100) / 100;
  if (gachaRate < 0.2) {
    drawValkyrie();
  } else {
    drawItem();
    guaranteed++;
  }
}

function generateImage() {
  return new Promise(((resolve) => {
    images('src/images/input.jpg')
      .size(1280, 950)
      .draw(images(`src/images/${resultArray[0]}`).size(160, 160), 174, 386)
      .draw(images(`src/images/${resultArray[1]}`).size(160, 160), 372, 386)
      .draw(images(`src/images/${resultArray[2]}`).size(160, 160), 567, 386)
      .draw(images(`src/images/${resultArray[3]}`).size(160, 160), 760, 386)
      .draw(images(`src/images/${resultArray[4]}`).size(160, 160), 950, 386)
      .draw(images(`src/images/${resultArray[5]}`).size(160, 160), 174, 576)
      .draw(images(`src/images/${resultArray[6]}`).size(160, 160), 372, 576)
      .draw(images(`src/images/${resultArray[7]}`).size(160, 160), 567, 576)
      .draw(images(`src/images/${resultArray[8]}`).size(160, 160), 760, 576)
      .draw(images(`src/images/${resultArray[9]}`).size(160, 160), 950, 576)
      .save('src/images/output.jpg', {
        quality: 50,
      });
    if (images.getUsedMemory() !== 0) {
      resolve(images.getUsedMemory());
    }
  }));
}

async function gachaStart() {
  getSRank = 0;
  guaranteed = 0;
  resultArray = [];
  for (let i = 0; i < 9; i++) {
    gachaDraw();
  }
  if (guaranteed === 9) {
    drawValkyrieGuaranteed();
  } else {
    gachaDraw();
  }
  await generateImage();
  return new Promise(((resolve) => {
    resolve('done');
  }));

}

exports.gachaStart = gachaStart;
