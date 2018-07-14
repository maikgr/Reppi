const images = require('images');
const standardGachaDatabase = require('../database/gachadb').standard;

let guaranteed = 0;

function getRandomInt(min, max) {
  const intMin = parseInt(min);
  const intMax = parseInt(max);
  return (Math.floor(Math.random() * (intMax - intMin)) + intMin);
}

function drawItem() {
  itemNumber = getRandomInt(1, 10);
  return `items/${itemNumber}.PNG`;
}

function drawValkyrieSRank() {
  const rand = getRandomInt(0, standardGachaDatabase.valk.s.length);
  return `valkyrie/${standardGachaDatabase.valk.s[rand]}`;
}

function drawValkyrieARank() {
  const rand = getRandomInt(0, standardGachaDatabase.valk.a.length);
  return `valkyrie/${standardGachaDatabase.valk.a[rand]}`;
}

function drawValkyrieBRank() {
  const rand = getRandomInt(0, standardGachaDatabase.valk.b.length);
  return `valkyrie/${standardGachaDatabase.valk.b[rand]}`;
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

function generateImage(resultArray) {
  resultArray.sort().reverse();
  return new Promise(((resolve) => {
    images('src/images/input.jpg')
      .size(1280, 950)
      .draw(images(`src/images/${resultArray[0]}`).size(180, 180), 177, 452)
      .draw(images(`src/images/${resultArray[1]}`).size(180, 180), 365, 452)
      .draw(images(`src/images/${resultArray[2]}`).size(180, 180), 548, 452)
      .draw(images(`src/images/${resultArray[3]}`).size(180, 180), 738, 452)
      .draw(images(`src/images/${resultArray[4]}`).size(180, 180), 921, 452)
      .draw(images(`src/images/${resultArray[5]}`).size(180, 180), 177, 635)
      .draw(images(`src/images/${resultArray[6]}`).size(180, 180), 365, 635)
      .draw(images(`src/images/${resultArray[7]}`).size(180, 180), 548, 635)
      .draw(images(`src/images/${resultArray[8]}`).size(180, 180), 738, 635)
      .draw(images(`src/images/${resultArray[9]}`).size(180, 180), 921, 635)
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

  await generateImage(resultArray);

  return new Promise(((resolve) => {
    resolve('done');
  }));

}

exports.gachaStart = gachaStart;