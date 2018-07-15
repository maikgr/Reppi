const images = require('images');
const standardGachaDatabase = require('../database/gachadb').standard;
const standardGachaValkyrieDb = require('../database/standardGachadb').valkyrie;
const standardGachaItemsDb = require('../database/standardGachadb').item;


let guaranteed = 0;

function getRandomInt(min, max) {
  const intMin = parseInt(min);
  const intMax = parseInt(max);
  return (Math.floor(Math.random() * (intMax - intMin)) + intMin);
}

function drawItem() {
  itemNumber = getRandomInt(1, standardGachaItemsDb.length);
  return standardGachaItemsDb[itemNumber];
}

function drawValkyrieSRank() {
  let valkyrieArray = [];

  for (i = 0; i < standardGachaValkyrieDb.length; i++){
    if (standardGachaValkyrieDb[i]['rarity'] === 4){
      valkyrieArray.push(standardGachaValkyrieDb[i]);
    }
  }
  const rand = getRandomInt(0, valkyrieArray.length);
  return valkyrieArray[rand];
}

function drawValkyrieARank() {
  let valkyrieArray = [];

  for (i = 0; i < standardGachaValkyrieDb.length; i++){
    if (standardGachaValkyrieDb[i]['rarity'] === 3){
      valkyrieArray.push(standardGachaValkyrieDb[i]);
    }
  }
  const rand = getRandomInt(0, valkyrieArray.length);
  return valkyrieArray[rand];
}

function drawValkyrieBRank() {
  let valkyrieArray = [];

  for (i = 0; i < standardGachaValkyrieDb.length; i++){
    if (standardGachaValkyrieDb[i]['rarity'] === 2){
      valkyrieArray.push(standardGachaValkyrieDb[i]);
    }
  }
  const rand = getRandomInt(0, valkyrieArray.length);
  return valkyrieArray[rand];
}

function drawValkyrie() {
  const rate = Math.floor(Math.random() * 100) / 100;
  if (rate < 0.073) {
    return drawValkyrieSRank();
  } else if (rate < 0.73) {
    return drawValkyrieARank();
  } else {
    guaranteed++;
    return drawValkyrieBRank();
  }
}

function drawValkyrieGuaranteed() {
  const rate = Math.floor(Math.random() * 100) / 100;
  if (rate < 0.1) {
    return drawValkyrieSRank();
  } else {
    return drawValkyrieARank();
  }
}

function gachaDraw() {
  const gachaRate = Math.floor(Math.random() * 100) / 100;
  if (gachaRate < 0.2) {
    return drawValkyrie();
  } else {
    guaranteed++;
    return drawItem();
  }
}

function rarityComparison(a, b) {
    if (a['rarity'] > b['rarity']) {
        return -1;
    } else if (a['rarity'] < b['rarity']) {
        return 1;
    } else {
        return 0;
    }
}

function generateImage(resultArray) {
  return new Promise(((resolve) => {
    images('src/images/input.jpg')
      .size(1280, 950)
      .draw(images(`${resultArray[0]['imagefull']}`), 0, 0)
      .draw(images(`${resultArray[5]['image']}`).size(180, 180), 356, 626)
      .draw(images(`${resultArray[6]['image']}`).size(180, 180), 516, 626)
      .draw(images(`${resultArray[7]['image']}`).size(180, 180), 676, 626)
      .draw(images(`${resultArray[8]['image']}`).size(180, 180), 836, 626)
      .draw(images(`${resultArray[9]['image']}`).size(180, 180), 996, 626)
      .draw(images(`${resultArray[0]['image']}`).size(180, 180), 356, 465)
      .draw(images(`${resultArray[1]['image']}`).size(180, 180), 516, 465)
      .draw(images(`${resultArray[2]['image']}`).size(180, 180), 676, 465)
      .draw(images(`${resultArray[3]['image']}`).size(180, 180), 836, 465)
      .draw(images(`${resultArray[4]['image']}`).size(180, 180), 996, 465)
      .save('src/images/output.jpg', {
        quality: 50,
      });
    if (images.getUsedMemory() !== 0) {
      resolve(images.getUsedMemory());
    }
  }));
}

async function gachaStart() {
  guaranteed = 0;
  resultArray = [];
  for (let i = 0; i < 9; i++) {
    resultArray.push(gachaDraw());
  }
  if (guaranteed === 9) {
     resultArray.push(drawValkyrieGuaranteed());
  } else {
     resultArray.push(gachaDraw());
  }

  await resultArray.sort(rarityComparison);

  await generateImage(resultArray);

  return resultArray[0]['rarity'];

}

exports.gachaStart = gachaStart;