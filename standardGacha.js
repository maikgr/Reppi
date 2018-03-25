const images = require("images");
var countFiles = require('count-files')

var standard = require('./gachadb').standard;
var chatGacha = require('./chatdb').chat;

var chatBox = "";
var guaranteed = 0;
var resultArray = [];
var getSRank = 0;
var chatBoxNumber = 0;
var memeChance = 0;
var itemNumber = 0;
var chatBoxChar = "";
var getSRankText = "";
var avatarRank = "";
var countingFiles = "";

async function gachaStart() {
  getSRank = 0;
  guaranteed = 0;
  resultArray = [];
  chatBox = "";
  for (var i = 0; i < 9; i++) {
    gachaDraw();
  }
  if (guaranteed == 9) {
    drawValkyrieGuaranteed()
  } else {
    gachaDraw();
  }
  let counted = await fileCount();
  let imageGenerated = await generateImage(counted);
  return new Promise(function(resolve, reject) {
    resolve('done');
  });

};

function gachaDraw() {
  gachaRate = Math.floor(Math.random() * 100) / 100;
  if (gachaRate < 0.2) {
    drawValkyrie()
  } else {
    drawItem();
    guaranteed++;
  }
}

function drawItem() {
  itemNumber = 0
  itemNumber = getRandomInt(1, 10);
  resultArray.push("items/" + itemNumber + ".PNG");
}

function drawValkyrie() {
  var rate = Math.floor(Math.random() * 100) / 100;
  if (rate < 0.073) {
    drawValkyrieSRank()
    getSRank++;
  } else if (rate < 0.73) {
    drawValkyrieARank()
  } else {
    drawValkyrieBRank()
    guaranteed++;
  }
}

function drawValkyrieGuaranteed() {
  var rate = Math.floor(Math.random() * 100) / 100;
  if (rate < 0.1) {
    drawValkyrieSRank()
    getSRank++;
  } else {
    drawValkyrieARank()
  }
}

function drawValkyrieSRank() {
  var rand = getRandomInt(0, standard.valk.s.length);
  resultArray.push("valkyrie/" + standard.valk.s[rand]);
}

function drawValkyrieARank() {
  var rand = getRandomInt(0, standard.valk.a.length);
  resultArray.push("valkyrie/" + standard.valk.a[rand]);
}

function drawValkyrieBRank() {
  var rand = getRandomInt(0, standard.valk.b.length);
  resultArray.push("valkyrie/" + standard.valk.b[rand]);
}

function getRandomInt(min, max) {
  var intMin = parseInt(min);
  var intMax = parseInt(max);
  return (Math.floor(Math.random() * (intMax - intMin)) + intMin);
}

function generateImage(valkyrieChatNumber) {
  chatBoxNumber = getRandomInt(1, valkyrieChatNumber + 1);
  return new Promise(function(resolve, reject) {
    images("input.jpg")
      .size(1280, 950)
      .draw(images("images/" + resultArray[0]).size(160, 160), 174, 386)
      .draw(images("images/" + resultArray[1]).size(160, 160), 372, 386)
      .draw(images("images/" + resultArray[2]).size(160, 160), 567, 386)
      .draw(images("images/" + resultArray[3]).size(160, 160), 760, 386)
      .draw(images("images/" + resultArray[4]).size(160, 160), 950, 386)
      .draw(images("images/" + resultArray[5]).size(160, 160), 174, 576)
      .draw(images("images/" + resultArray[6]).size(160, 160), 372, 576)
      .draw(images("images/" + resultArray[7]).size(160, 160), 567, 576)
      .draw(images("images/" + resultArray[8]).size(160, 160), 760, 576)
      .draw(images("images/" + resultArray[9]).size(160, 160), 950, 576)
      .draw(images("images/chat/" + chatBoxChar + "/" + getSRankText + "/" + chatBoxNumber + ".PNG").size(989, 276), 0, 680)
      .draw(images("images/chat/" + chatBoxChar + "/" + avatarRank).size(242, 276), 0, 680)
      .save("output.jpg", {
        quality: 50
      });
    if (images.getUsedMemory() != 0) {
      resolve(images.getUsedMemory());
    }
  });
}

function fileCount() {
  resultArray.sort().reverse();
  var rand = getRandomInt(0, chatGacha.character.length);
  chatBoxChar = chatGacha.character[rand];
  getSRankText = "";
  avatarRank = "";
  if (getSRank > 0) {
    getSRankText = "srank";
    avatarRank = "Savatar.PNG";
  } else {
    getSRankText = "nosrank";
    avatarRank = "avatar.PNG";
  }
  return new Promise(function(resolve, reject) {
    countFiles('images/chat/' + chatBoxChar + '/' + getSRankText, function(err, results) {
      if (results.files != 0) {
        resolve(results.files);
      }
    });
  })
}

exports.gachaStart = gachaStart;
