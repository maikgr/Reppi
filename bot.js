var countFiles = require('count-files')
const Discord = require("discord.js");
const client = new Discord.Client();
var standardGacha = require('./standardGacha.js');
var memeFileName;

client.login('NDI0ODA4NDA2NDcwMzYxMDg4.DZk4lw.TJzxym6ET6Hg8uGGd_wdHWZYWqQ');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

});

function getRandomInt(min, max) {
  var intMin = parseInt(min);
  var intMax = parseInt(max);
  return (Math.floor(Math.random() * (intMax - intMin)) + intMin);
}

countFiles('images/random', function(err, results) {
  connectClient(results.files);
});

function connectClient(memeFileTotal) {
  client.on('message', msg => {
    var channel = client.channels.get('378748690095013919');
    //378748690095013919 for Repulsion
    if (msg.content === '!gacha') {
      if (msg.channel.name !== 'bot-spam') {
        msg.reply("Does this looks like " + channel + " channel to you? If yes, I suggest you to get your eyesight checked.")
      } else {

        memeChance = Math.floor(Math.random() * 100) / 100;
        console.log("memeChance : " + memeChance);
        memeFileName = getRandomInt(1, memeFileTotal + 1);

        if (memeChance < 0.07) {
          msg.reply("", {
            file: "./images/random/" + memeFileName + ".JPG"
          });
        } else {
          start();

          async function start(){
            let done = await standardGacha.gachaStart();
            if (done == 'done'){
              msg.reply("", {
                file: "output.jpg"
              });
            }
          }

        }
      }
    }


    if (msg.content.startsWith("!valkyrie")) {

      if (msg.content === "!valkyrie") {
        msg.reply({
          embed: {
            "title": "``Valkyrie list``",
            "fields": [{
              "name": "----------------",
              "value": "Kiana Kaslana \n`!valkyrie kiana` \n\nMei Raiden \n`!valkyrie mei` \n\nBronya Zaychik \n`!valkyrie bronya` \n\nHimeko Murata \n`!valkyrie himeko` \n\nSakura Yae  \n`!valkyrie sakura` \n\nTheresa Apocalypse  \n`!valkyrie theresa` \n\nKallen Kaslana  \n`!valkyrie kallen` \n\nFu Hua  \n`!valkyrie fuhua`"
            }]
          }
        });
      } else

        //Kiana =========================================
        if (msg.content === "!valkyrie kiana") {
          msg.reply({
            embed: {
              "title": "``Kiana Kaslana``",
              "fields": [{
                "name": "------",
                "value": "White Comet \n`!valkyrie wc` \n\nRanger \n`!valkyrie ranger` \n\nDivine Prayer \n`!valkyrie dp` \n\nMoonbeam/Moonlight \n`!valkyrie mb`"
              }]
            }
          });
        } else

      if (msg.content === "!valkyrie wc") {
        msg.reply("", {
          file: "./images/valkyriedetails/whitecomet.PNG"
        });
      } else

      if (msg.content === "!valkyrie mb") {
        msg.reply("", {
          file: "./images/valkyriedetails/moonbeam.PNG"
        });
      } else

      if (msg.content === "!valkyrie dp") {
        msg.reply("", {
          file: "./images/valkyriedetails/divineprayer.PNG"
        });
      } else

      if (msg.content === "!valkyrie ranger") {
        msg.reply("", {
          file: "./images/valkyriedetails/ranger.PNG"
        });
      } else
        //Kiana =========================================



        //Mei =========================================
        if (msg.content === "!valkyrie mei") {
          msg.reply({
            embed: {
              "title": "``Mei Raiden``",
              "fields": [{
                "name": "------",
                "value": "Crimson Impulse \n`!valkyrie ci` \n\nShadow Dash \n`!valkyrie sd` \n\nStriker \n`!valkyrie striker` \n\nLightning Empress \n`!valkyrie le`"
              }]
            }
          });
        } else

      if (msg.content === "!valkyrie ci") {
        msg.reply("", {
          file: "./images/valkyriedetails/crimsonimpulse.PNG"
        });
      } else

      if (msg.content === "!valkyrie sd") {
        msg.reply("", {
          file: "./images/valkyriedetails/shadowdash.PNG"
        });
      } else

      if (msg.content === "!valkyrie striker") {
        msg.reply("", {
          file: "./images/valkyriedetails/striker.PNG"
        });
      } else

      if (msg.content === "!valkyrie le") {
        msg.reply("", {
          file: "./images/valkyriedetails/lightningempress.PNG"
        });
      } else
      //Mei =========================================

      //Bronya =========================================
      if (msg.content === "!valkyrie bronya") {
        msg.reply({
          embed: {
            "title": "``Bronya Zaychik``",
            "fields": [{
              "name": "------",
              "value": "Chariot \n`!valkyrie chariot` \n\nYamabuki Armor \n`!valkyrie yama` \n\nSnowy Sniper \n`!valkyrie snowy` \n\nDimensional Break \n`!valkyrie db` \n\nSilver Wolf \n`!valkyrie wolf` \n\nBlack Nucleus \n`!valkyrie bn`"
            }]
          }
        });
      } else

      if (msg.content === "!valkyrie chariot") {
        msg.reply("", {
          file: "./images/valkyriedetails/chariot.PNG"
        });
      } else

      if (msg.content === "!valkyrie yama") {
        msg.reply("", {
          file: "./images/valkyriedetails/yamabuki.PNG"
        });
      } else

      if (msg.content === "!valkyrie snowy") {
        msg.reply("", {
          file: "./images/valkyriedetails/snowy.PNG"
        });
      } else

      if (msg.content === "!valkyrie db") {
        msg.reply("", {
          file: "./images/valkyriedetails/dimensionalbreak.PNG"
        });
      } else

      if (msg.content === "!valkyrie wolf") {
        msg.reply("", {
          file: "./images/valkyriedetails/wolf.PNG"
        });
      } else

      if (msg.content === "!valkyrie bn") {
        msg.reply("", {
          file: "./images/valkyriedetails/blacknucleus.PNG"
        });
      } else
      //Bronya =========================================

      //Himeko =========================================
      if (msg.content === "!valkyrie himeko") {
        msg.reply({
          embed: {
            "title": "``Himeko Murata``",
            "fields": [{
              "name": "------",
              "value": "Battle Storm \n`!valkyrie bs` \n\nTriumph \n`!valkyrie triumph` \n\nScarlet Fusion \n`!valkyrie sf` \n\nBlood Rose \n`!valkyrie br`"
            }]
          }
        });
      } else

      if (msg.content === "!valkyrie bs") {
        msg.reply("", {
          file: "./images/valkyriedetails/battlestorm.PNG"
        });
      } else

      if (msg.content === "!valkyrie triumph") {
        msg.reply("", {
          file: "./images/valkyriedetails/triumph.PNG"
        });
      } else

      if (msg.content === "!valkyrie sf") {
        msg.reply("", {
          file: "./images/valkyriedetails/scarletfusion.PNG"
        });
      } else

      if (msg.content === "!valkyrie br") {
        msg.reply("", {
          file: "./images/valkyriedetails/bloodrose.PNG"
        });
      } else
      //Himeko =========================================

      //Sakura =========================================
      if (msg.content === "!valkyrie sakura") {
        msg.reply({
          embed: {
            "title": "``Sakura Yae``",
            "fields": [{
              "name": "------",
              "value": "Miko \n`!valkyrie miko` \n\nFire Sakura \n`!valkyrie firesaku` \n\nUnforgotten Apostle \n`!valkyrie ua`"
            }]
          }
        });
      } else

      if (msg.content === "!valkyrie miko") {
        msg.reply("", {
          file: "./images/valkyriedetails/miko.PNG"
        });
      } else

      if (msg.content === "!valkyrie firesaku") {
        msg.reply("", {
          file: "./images/valkyriedetails/firesaku.PNG"
        });
      } else

      if (msg.content === "!valkyrie ua") {
        msg.reply("", {
          file: "./images/valkyriedetails/unforgottenapostle.PNG"
        });
      } else
      //Sakura =========================================

      //Theresa =========================================
      if (msg.content === "!valkyrie theresa") {
        msg.reply({
          embed: {
            "title": "``Theresa Apocalypse``",
            "fields": [{
              "name": "------",
              "value": "Pledge \n`!valkyrie pledge` \n\nSakuno Rondo \n`!valkyrie rondo` \n\nViolet Executer \n`!valkyrie ve` \n\nGod Blessing Anthem \n`!valkyrie anthem`"
            }]
          }
        });
      } else

      if (msg.content === "!valkyrie pledge") {
        msg.reply("", {
          file: "./images/valkyriedetails/pledge.PNG"
        });
      } else

      if (msg.content === "!valkyrie rondo") {
        msg.reply("", {
          file: "./images/valkyriedetails/rondo.PNG"
        });
      } else

      if (msg.content === "!valkyrie ve") {
        msg.reply("", {
          file: "./images/valkyriedetails/violetexecuter.PNG"
        });
      } else

      if (msg.content === "!valkyrie anthem") {
        msg.reply("", {
          file: "./images/valkyriedetails/anthem.PNG"
        });
      } else
      //Theresa =========================================

      //Kallen =========================================
      if (msg.content === "!valkyrie kallen") {
        msg.reply("", {
          file: "./images/valkyriedetails/kallen.PNG"
        });
      } else
      //Kallen =========================================

      //Fuhua =========================================
      if (msg.content === "!valkyrie fuhua") {
        msg.reply({
          embed: {
            "title": "``Fu Hua``",
            "fields": [{
              "name": "------",
              "value": "Swift Wing \n`!valkyrie sw` \n\nBlack Knight Full Moon \n`!valkyrie bk`"
            }]
          }
        });
      } else

      if (msg.content === "!valkyrie sw") {
        msg.reply("", {
          file: "./images/valkyriedetails/swiftwing.PNG"
        });
      } else

      if (msg.content === "!valkyrie bk") {
        msg.reply("", {
          file: "./images/valkyriedetails/blackknight.PNG"
        });
      }
      //Fuhua =========================================

      else {
        msg.reply("Valkyrie not found. Please do `!valkyrie`");
      }

    }



  });
}
