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
            "color": 6332693,
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
              "color": 6332693,
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
              "color": 6332693,
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
              "color": 6332693,
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
              "color": 6332693,
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
              "color": 6332693,
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
              "color": 6332693,
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
                "color": 6332693,
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

    if (msg.content.startsWith("!weapon")) {
      if (msg.content === "!weapon") {
        msg.reply({
          embed: {
            "color": 6332693,
            "title": "``Weapon list``",
            "fields": [{
              "name": "----------------",
              "value": "Gun \n`!weapon gun` \n\nKatana \n`!weapon katana` \n\nCannon \n`!weapon cannon` \n\ngreatsword \n`!weapon greatsword` \n\nCross \n`!weapon cross` \n\nGauntlet \n`!weapon gauntlet`"
            }]
          }
        });

      } else if (msg.content.startsWith("!weapon gun")) {
        if (msg.content === "!weapon gun") {
          msg.reply({
            embed: {
              "color": 6332693,
              "title": "``Gun``",
              "fields": [{
                "name": "----------------",
                "value": "4★ Gun  \n`!weapon gun 4star` \n\n3★ Gun  \n`!weapon gun 3star` \n\n2★ Gun  \n`!weapon gun 2star` \n\n1★ Gun  \n`!weapon gun 1star`"
              }]
            }
          });
        }
        if (msg.content === "!weapon gun 4star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.gun.fourstar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        if (msg.content === "!weapon gun 3star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.gun.threestar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        if (msg.content === "!weapon gun 2star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.gun.twostar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        if (msg.content === "!weapon gun 1star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.gun.onestar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
      } else if (msg.content.startsWith("!weapon katana")) {
        if (msg.content === "!weapon katana") {
          msg.reply({
            embed: {
              "color": 6332693,
              "title": "``Katana``",
              "fields": [{
                "name": "----------------",
                "value": "4★ Katana  \n`!weapon katana 4star` \n\n3★ Katana  \n`!weapon katana 3star` \n\n2★ Katana  \n`!weapon katana 2star` \n\n1★ Katana  \n`!weapon katana 1star`"
              }]
            }
          });
        }
        if (msg.content === "!weapon katana 4star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.katana.fourstar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        if (msg.content === "!weapon katana 3star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.katana.threestar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        if (msg.content === "!weapon katana 2star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.katana.twostar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        if (msg.content === "!weapon katana 1star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.katana.onestar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
      } else if (msg.content.startsWith("!weapon cannon")) {
        if (msg.content === "!weapon cannon") {
          msg.reply({
            embed: {
              "color": 6332693,
              "title": "``Cannon``",
              "fields": [{
                "name": "----------------",
                "value": "4★ Cannon  \n`!weapon cannon 4star` \n\n3★ Cannon  \n`!weapon cannon 3star` \n\n2★ Cannon  \n`!weapon cannon 2star` \n\n1★ Cannon  \n`!weapon cannon 1star`"
              }]
            }
          });
        }
        if (msg.content === "!weapon cannon 4star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.cannon.fourstar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        if (msg.content === "!weapon cannon 3star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.cannon.threestar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        if (msg.content === "!weapon cannon 2star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.cannon.twostar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        if (msg.content === "!weapon cannon 1star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.cannon.onestar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        //select star
      } else if (msg.content.startsWith("!weapon greatsword")) {
        if (msg.content === "!weapon greatsword") {
          msg.reply({
            embed: {
              "color": 6332693,
              "title": "``greatsword``",
              "fields": [{
                "name": "----------------",
                "value": "4★ greatsword  \n`!weapon greatsword 4star` \n\n3★ greatsword  \n`!weapon greatsword 3star` \n\n2★ greatsword  \n`!weapon greatsword 2star` \n\n1★ greatsword  \n`!weapon greatsword 1star`"
              }]
            }
          });
        }
        if (msg.content === "!weapon greatsword 4star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.greatsword.fourstar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        if (msg.content === "!weapon greatsword 3star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.greatsword.threestar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        if (msg.content === "!weapon greatsword 2star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.greatsword.twostar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        if (msg.content === "!weapon greatsword 1star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.greatsword.onestar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        //select star
      } else if (msg.content.startsWith("!weapon cross")) {
        if (msg.content === "!weapon cross") {
          msg.reply({
            embed: {
              "color": 6332693,
              "title": "``Cross``",
              "fields": [{
                "name": "----------------",
                "value": "4★ Cross  \n`!weapon cross 4star` \n\n3★ Cross  \n`!weapon cross 3star` \n\n2★ Cross  \n`!weapon cross 2star` \n\n1★ Cross  \n`!weapon cross 1star`"
              }]
            }
          });
        }
        if (msg.content === "!weapon cross 4star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.cross.fourstar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        if (msg.content === "!weapon cross 3star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.cross.threestar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        if (msg.content === "!weapon cross 2star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.cross.twostar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        if (msg.content === "!weapon cross 1star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.cross.onestar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        //select star
      } else if (msg.content.startsWith("!weapon gauntlet")) {
        if (msg.content === "!weapon gauntlet") {
          msg.reply({
            embed: {
              "color": 6332693,
              "title": "``Gauntlet``",
              "fields": [{
                "name": "----------------",
                "value": "4★ Gauntlet  \n`!weapon gauntlet 4star` \n\n3★ Gauntlet  \n`!weapon gauntlet 3star` \n\n2★ Gauntlet  \n`!weapon gauntlet 2star`"
              }]
            }
          });
        }
        if (msg.content === "!weapon gauntlet 4star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.gauntlet.fourstar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        if (msg.content === "!weapon gauntlet 3star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.gauntlet.threestar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        if (msg.content === "!weapon gauntlet 2star") {
          var selectedWeapon = require('./equipmentdb').equipment.weapon.gauntlet.twostar;
          weaponMenu(msg.content, 0, selectedWeapon);
        }
        //select star
      } else {
        //reply unknown weapon
      }
    }

    function weaponMenu(message, page, getSelectedWeapon) {
      currentMessage = message;
      currentPage = page;
      var selectedWeapon = getSelectedWeapon;
      titleForEmbed = "";
      authorImageForEmbed = "";
      authorImageAttachmentForembed = "";

      if (message.includes("4star")) {
        if (message.includes("gun")) {
          titleForEmbed = "4★ Gun";
          authorImageAttachmentForEmbed = "images/equipment/weapon/gunicon.PNG";
        }
        if (message.includes("katana")) {
          titleForEmbed = "4★ Katana";
          authorImageAttachmentForEmbed = "images/equipment/weapon/katanaicon.PNG";
        }
        if (message.includes("cannon")) {
          titleForEmbed = "4★ Cannon";
          authorImageAttachmentForEmbed = "images/equipment/weapon/cannonicon.PNG";
        }
        if (message.includes("greatsword")) {
          titleForEmbed = "4★ greatsword";
          authorImageAttachmentForEmbed = "images/equipment/weapon/greatswordicon.PNG";
        }
        if (message.includes("cross")) {
          titleForEmbed = "4★ Cross";
          authorImageAttachmentForEmbed = "images/equipment/weapon/crossicon.PNG";
        }
        if (message.includes("gauntlet")) {
          titleForEmbed = "4★ Gauntlet";
          authorImageAttachmentForEmbed = "images/equipment/weapon/gauntleticon.PNG";
        }



      }

      if (message.includes("3star")) {
        if (message.includes("gun")) {
          titleForEmbed = "3★ Gun";
          authorImageAttachmentForEmbed = "images/equipment/weapon/gunicon.PNG";
        }
        if (message.includes("katana")) {
          titleForEmbed = "3★ Katana";
          authorImageAttachmentForEmbed = "images/equipment/weapon/katanaicon.PNG";
        }
        if (message.includes("cannon")) {
          titleForEmbed = "3★ Cannon";
          authorImageAttachmentForEmbed = "images/equipment/weapon/cannonicon.PNG";
        }
        if (message.includes("greatsword")) {
          titleForEmbed = "3★ greatsword";
          authorImageAttachmentForEmbed = "images/equipment/weapon/greatswordicon.PNG";
        }
        if (message.includes("cross")) {
          titleForEmbed = "3★ Cross";
          authorImageAttachmentForEmbed = "images/equipment/weapon/crossicon.PNG";
        }
        if (message.includes("gauntlet")) {
          titleForEmbed = "3★ Gauntlet";
          authorImageAttachmentForEmbed = "images/equipment/weapon/gauntleticon.PNG";
        }
      }

      if (message.includes("2star")) {
        if (message.includes("gun")) {
          titleForEmbed = "2★ Gun";
          authorImageAttachmentForEmbed = "images/equipment/weapon/gunicon.PNG";
        }
        if (message.includes("katana")) {
          titleForEmbed = "2★ Katana";
          authorImageAttachmentForEmbed = "images/equipment/weapon/katanaicon.PNG";
        }
        if (message.includes("cannon")) {
          titleForEmbed = "2★ Cannon";
          authorImageAttachmentForEmbed = "images/equipment/weapon/cannonicon.PNG";
        }
        if (message.includes("greatsword")) {
          titleForEmbed = "2★ greatsword";
          authorImageAttachmentForEmbed = "images/equipment/weapon/greatswordicon.PNG";
        }
        if (message.includes("cross")) {
          titleForEmbed = "2★ Cross";
          authorImageAttachmentForEmbed = "images/equipment/weapon/crossicon.PNG";
        }
        if (message.includes("gauntlet")) {
          titleForEmbed = "2★ Gauntlet";
          authorImageAttachmentForEmbed = "images/equipment/weapon/gauntleticon.PNG";
        }
      }

      if (message.includes("1star")) {
        if (message.includes("gun")) {
          titleForEmbed = "1★ Gun";
          authorImageAttachmentForEmbed = "images/equipment/weapon/gunicon.PNG";
        }
        if (message.includes("katana")) {
          titleForEmbed = "1★ Katana";
          authorImageAttachmentForEmbed = "images/equipment/weapon/katanaicon.PNG";
        }
        if (message.includes("cannon")) {
          titleForEmbed = "1★ Cannon";
          authorImageAttachmentForEmbed = "images/equipment/weapon/cannonicon.PNG";
        }
        if (message.includes("greatsword")) {
          titleForEmbed = "1★ greatsword";
          authorImageAttachmentForEmbed = "images/equipment/weapon/greatswordicon.PNG";
        }
        if (message.includes("cross")) {
          titleForEmbed = "1★ Cross";
          authorImageAttachmentForEmbed = "images/equipment/weapon/crossicon.PNG";
        }
        if (message.includes("gauntlet")) {
          titleForEmbed = "1★ Gauntlet";
          authorImageAttachmentForEmbed = "images/equipment/weapon/gauntleticon.PNG";
        }
      }

      //===

      var weaponArrayName = [];
      var weaponArrayWhole = [];
      for (var i = 0; i < selectedWeapon.length; i++) {
        weaponArrayName.push(selectedWeapon[i][0]);
        weaponArrayWhole.push(selectedWeapon[i]);
      }
      var weaponArrayNameTemp = weaponArrayName;

      for (var i = 0; i < page; i++) {
        weaponArrayNameTemp.splice(0, 9);
        weaponArrayWhole.splice(0, 9);
      }

      reactionNumberArray = ["1⃣", "2⃣", "3⃣", "4⃣", "5⃣", "6⃣", "7⃣", "8⃣", "9⃣"];

      var embedWeaponNames = "";
      if (weaponArrayNameTemp.length > 9) {
        for (i = 0; i < 9; i++) {
          embedWeaponNames += i + 1 + ". " + weaponArrayNameTemp[i] + "\n";
        }
      } else {
        for (i = 0; i < weaponArrayNameTemp.length; i++) {
          embedWeaponNames += i + 1 + ". " + weaponArrayNameTemp[i] + "\n";
        }
      }

      totalPageNumber = Math.floor(selectedWeapon.length / 9) + 1;
      currentPageDisplay = currentPage + 1;

      embed = {
        "author": {
          "name": titleForEmbed,
          "icon_url": "attachment://" + authorImageAttachmentForEmbed.replace("images/equipment/weapon/", "")
        },
        "color": 6332693,
        "title": "Select a weapon",
        "thumbnail": {
          "url": "attachment://" + authorImageAttachmentForEmbed.replace("images/equipment/weapon/", "")
        },
        "footer": {
          "icon_url": "attachment://attentionicon.PNG",
          "text": "Page " + currentPageDisplay + " of " + totalPageNumber + " | Please press the number below (reaction) to select"
        },
        "fields": [{
          "name": "----------------",
          "value": "" + embedWeaponNames
        }]
      }
      msg.reply({
        embed,
        files: [{
          attachment: authorImageAttachmentForEmbed,
          name: authorImageAttachmentForEmbed.replace("images/equipment/weapon/", "")
        }, {
          attachment: "images/attentionicon.PNG",
          name: "attentionicon.PNG"
        }]
      }).then(async function(newMessage) {
        const collector = newMessage.createReactionCollector((reaction, user) =>
          user.id === msg.author.id &&
          reaction.emoji.name === "◀" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "1⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "2⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "3⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "4⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "5⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "6⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "7⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "8⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "9⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "▶" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "❌"
        ).once("collect", reaction => {
          const chosen = reaction.emoji.name;
          if (chosen === "◀") {
            newMessage.delete();
            if (currentPage == 0) {
              msg.reply("please do not add reaction by yourself.")
            } else {
              weaponMenu(currentMessage, currentPage - 1, getSelectedWeapon);
            }

          }


          for (i = 0; i < 9; i++) {
            emoji = reactionNumberArray[i];
            if (chosen === emoji) {
              newMessage.delete();
              if (weaponArrayWhole.length < 1) {
                msg.reply("please do not add reaction by yourself.")
              } else {
                field1 = "";
                field2 = "";

                if (weaponArrayWhole[i][1] != "-") {
                  field1 = {
                    "name": weaponArrayWhole[i][1],
                    "value": weaponArrayWhole[i][2]
                  }
                } else {
                  field1 = {
                    "name": "Skill",
                    "value": "None"
                  }
                }

                if (weaponArrayWhole[i][3] != "-") {
                  field2 = {
                    "name": weaponArrayWhole[i][3],
                    "value": weaponArrayWhole[i][4]
                  }
                } else {
                  field2 = {
                    "name": "Skill",
                    "value": "None"
                  }
                }

                embed = {
                  "author": {
                    "name": titleForEmbed,
                    "icon_url": "attachment://" + authorImageAttachmentForEmbed.replace("images/equipment/weapon/", "")
                  },
                  "color": 6332693,
                  "title": weaponArrayWhole[i][0],
                  "thumbnail": {
                    "url": weaponArrayWhole[i][5]
                  },
                  "footer": {
                    "icon_url": "attachment://attentionicon.PNG",
                    "text": "All information from http://houkai3rd.arthobbylab.com/"
                  },
                  "fields": [{
                    "name": "Attack",
                    "value": weaponArrayWhole[i][6],
                    "inline": true
                  }, {
                    "name": "Critical",
                    "value": weaponArrayWhole[i][7],
                    "inline": true
                  }, field1, field2]
                }
                msg.reply({
                  embed,
                  files: [{
                    attachment: authorImageAttachmentForEmbed,
                    name: authorImageAttachmentForEmbed.replace("images/equipment/weapon/", "")
                  }, {
                    attachment: "images/attentionicon.PNG",
                    name: "attentionicon.PNG"
                  }]
                })
              }
            }
          }

          if (chosen === "▶") {
            newMessage.delete();
            if (weaponArrayWhole.length <= 9) {
              msg.reply("please do not add reaction by yourself.")
            } else {
              weaponMenu(currentMessage, currentPage + 1, getSelectedWeapon);
            }
          }

          if (chosen === "❌") {
            newMessage.delete();
          }
          collector.stop();
        });

        if (page > 0) {
          await newMessage.react("◀").catch((error) => {});
        }

        if (weaponArrayNameTemp.length <= 9) {
          for (i = 0; i < weaponArrayNameTemp.length; i++) {
            await newMessage.react(reactionNumberArray[i]).catch((error) => {});
          }
        } else {
          for (i = 0; i < 9; i++) {
            await newMessage.react(reactionNumberArray[i]).catch((error) => {});
          }
        }

        if (weaponArrayNameTemp.length > 9) {
          await newMessage.react("▶").catch((error) => {});
        }

        await newMessage.react("❌").catch((error) => {});

      });
    }

    if (msg.content.startsWith("!stigmata")) {
      if (msg.content === "!stigmata") {
        stigmataMenu();
      }
    }

    function stigmataMenu() {
      embed = {
        "author": {
          "name": "Stigmata"
        },
        "color": 6332693,
        "title": "Select rarity",
        "footer": {
          "icon_url": "attachment://attentionicon.PNG",
          "text": "Please press the number below (reaction) to select"
        },
        "fields": [{
          "name": "----------------",
          "value": "1. ★★★★☆\n2. ★★★☆\n3. ★★☆\n4. ★☆"
        }]
      }
      msg.reply({
        embed,
        files: [{
          attachment: "images/attentionicon.PNG",
          name: "attentionicon.PNG"
        }]
      }).then(async function(newMessage) {
        const collector = newMessage.createReactionCollector((reaction, user) =>
          user.id === msg.author.id &&
          reaction.emoji.name === "1⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "2⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "3⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "4⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "▶" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "❌"
        ).once("collect", reaction => {
          const chosen = reaction.emoji.name;
          if (chosen === "1⃣") {
            newMessage.delete();
            stigmataMenuSelected(4, 0);
          } else if (chosen === "2⃣") {
            newMessage.delete();
            stigmataMenuSelected(3, 0);
          } else if (chosen === "3⃣") {
            newMessage.delete();
            stigmataMenuSelected(2, 0);
          } else if (chosen === "4⃣") {
            newMessage.delete();
            stigmataMenuSelected(1, 0);
          } else if (chosen === "❌") {
            newMessage.delete();
          }
          collector.stop();
        });
        await newMessage.react("1⃣").catch((error) => {});
        await newMessage.react("2⃣").catch((error) => {});
        await newMessage.react("3⃣").catch((error) => {});
        await newMessage.react("4⃣").catch((error) => {});
        await newMessage.react("❌").catch((error) => {});
      });
    }

    function stigmataMenuSelected(star, page) {
      var selectedStarStigmata = "";
      var currentStar = star;
      var currentPage = page;
      if (currentStar == 4) {
        var selectedStarStigmata = require('./equipmentdb').equipment.stigmata.fourstar;
      }
      if (currentStar == 3) {
        var selectedStarStigmata = require('./equipmentdb').equipment.stigmata.threestar;
      }
      if (currentStar == 2) {
        var selectedStarStigmata = require('./equipmentdb').equipment.stigmata.twostar;
      }
      if (currentStar == 1) {
        var selectedStarStigmata = require('./equipmentdb').equipment.stigmata.onestar;
      }

      var stigmataArrayName = [];
      var stigmataArrayWhole = [];
      for (var i = 0; i < selectedStarStigmata.length; i++) {
        stigmataArrayName.push(selectedStarStigmata[i]);
        stigmataArrayWhole.push(selectedStarStigmata[i]);
      }

      stigmataArrayNameTemp = stigmataArrayName;

      for (var i = 0; i < page; i++) {
        stigmataArrayNameTemp.splice(0, 9);
        stigmataArrayWhole.splice(0, 9);
      }

      reactionNumberArray = ["1⃣", "2⃣", "3⃣", "4⃣", "5⃣", "6⃣", "7⃣", "8⃣", "9⃣"];



      var embedStigmataNames = "";
      if (stigmataArrayNameTemp.length > 9) {
        for (i = 0; i < 9; i++) {
          embedStigmataNames += i + 1 + ". " + stigmataArrayNameTemp[i][3][0] + "\n";
        }
      } else {
        for (i = 0; i < stigmataArrayNameTemp.length; i++) {
          embedStigmataNames += i + 1 + ". " + stigmataArrayNameTemp[i][3][0] + "\n";
        }
      }

      totalPageNumber = Math.floor(selectedStarStigmata.length / 9) + 1;
      currentPageDisplay = currentPage + 1;

      embed = {
        "author": {
          "name": "test"
        },
        "color": 6332693,
        "title": "Select a weapon",
        "footer": {
          "icon_url": "attachment://attentionicon.PNG",
          "text": "Page " + currentPageDisplay + " of " + totalPageNumber + " | Please press the number below (reaction) to select"
        },
        "fields": [{
          "name": "----------------",
          "value": "" + embedStigmataNames
        }]
      }
      msg.reply({
        embed
      }).then(async function(newMessage) {
        const collector = newMessage.createReactionCollector((reaction, user) =>
          user.id === msg.author.id &&
          reaction.emoji.name === "◀" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "1⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "2⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "3⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "4⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "5⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "6⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "7⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "8⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "9⃣" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "▶" ||
          user.id === msg.author.id &&
          reaction.emoji.name === "❌"
        ).once("collect", async reaction => {
          const chosen = reaction.emoji.name;
          if (chosen === "◀") {
            newMessage.delete();
            if (currentPage == 0) {
              msg.reply("please do not add reaction by yourself.")
            } else {
              stigmataMenuSelected(currentStar, currentPage - 1);
            }
          }

          for (i = 0; i < 9; i++) {
            emoji = reactionNumberArray[i];
            stigmataChosen = i;
            if (chosen === await emoji) {
              newMessage.delete();
              if (stigmataArrayWhole.length < 1) {
                msg.reply("please do not add reaction by yourself.")
              } else {



                if (stigmataArrayWhole[stigmataChosen][0][0] != "-"){
                  //Top
                  await msg.reply({embed: {
                      "author": {
                        "icon_url": "attachment://top.PNG",
                        "name": stigmataArrayWhole[stigmataChosen][0][0]
                      },
                      "color": 16748921,
                      "thumbnail": {
                        "url": stigmataArrayWhole[stigmataChosen][0][6]
                      },
                      "fields": [{
                        "name": "HP",
                        "value": stigmataArrayWhole[stigmataChosen][0][2],
                        "inline": true
                      }, {
                        "name": "ATK",
                        "value": stigmataArrayWhole[stigmataChosen][0][3],
                        "inline": true
                      }, {
                        "name": "DEF",
                        "value": stigmataArrayWhole[stigmataChosen][0][4],
                        "inline": true
                      }, {
                        "name": "CRI",
                        "value": stigmataArrayWhole[stigmataChosen][0][5],
                        "inline": true
                      }, {
                        "name": "Effect",
                        "value": stigmataArrayWhole[stigmataChosen][0][1]
                      }, ]
                    },
                    files: [{
                      attachment: "images/equipment/stigmata/top.PNG",
                      name: "top.PNG"
                    }]
                  })
                }

                if (stigmataArrayWhole[stigmataChosen][1][0] != "-"){
                  //Middle
                  await msg.channel.send({embed: {
                      "author": {
                        "icon_url": "attachment://middle.PNG",
                        "name": stigmataArrayWhole[stigmataChosen][1][0]
                      },
                      "color": 10070783,
                      "thumbnail": {
                        "url": stigmataArrayWhole[stigmataChosen][1][6]
                      },
                      "fields": [{
                        "name": "HP",
                        "value": stigmataArrayWhole[stigmataChosen][1][2],
                        "inline": true
                      }, {
                        "name": "ATK",
                        "value": stigmataArrayWhole[stigmataChosen][1][3],
                        "inline": true
                      }, {
                        "name": "DEF",
                        "value": stigmataArrayWhole[stigmataChosen][1][4],
                        "inline": true
                      }, {
                        "name": "CRI",
                        "value": stigmataArrayWhole[stigmataChosen][1][5],
                        "inline": true
                      }, {
                        "name": "Effect",
                        "value": stigmataArrayWhole[stigmataChosen][1][1]
                      }, ]
                    },
                    files: [{
                      attachment: "images/equipment/stigmata/middle.PNG",
                      name: "middle.PNG"
                    }]
                  });
                }

                if (stigmataArrayWhole[stigmataChosen][2][0] != "-"){
                  //Bottom
                  await msg.channel.send({embed: {
                      "author": {
                        "icon_url": "attachment://bottom.PNG",
                        "name": stigmataArrayWhole[stigmataChosen][2][0]
                      },
                      "color": 11716965,
                      "thumbnail": {
                        "url": stigmataArrayWhole[stigmataChosen][2][6]
                      },
                      "fields": [{
                        "name": "HP",
                        "value": stigmataArrayWhole[stigmataChosen][2][2],
                        "inline": true
                      }, {
                        "name": "ATK",
                        "value": stigmataArrayWhole[stigmataChosen][2][3],
                        "inline": true
                      }, {
                        "name": "DEF",
                        "value": stigmataArrayWhole[stigmataChosen][2][4],
                        "inline": true
                      }, {
                        "name": "CRI",
                        "value": stigmataArrayWhole[stigmataChosen][2][5],
                        "inline": true
                      }, {
                        "name": "Effect",
                        "value": stigmataArrayWhole[stigmataChosen][2][1]
                      }, ]
                    },
                    files: [{
                      attachment: "images/equipment/stigmata/bottom.PNG",
                      name: "bottom.PNG"
                    }]
                  });
                }


                if (stigmataArrayWhole[stigmataChosen][3][1] != "-"){
                  //Set
                  await msg.channel.send({embed: {
                      "author": {
                        "name": stigmataArrayWhole[stigmataChosen][3][0] + " Set Effect"
                      },
                      "color": 16777215,
                      "footer": {
                        "icon_url": "attachment://attentionicon.PNG",
                        "text": "All information from http://houkai3rd.arthobbylab.com/"
                      },
                      "fields": [{
                        "name": "2 Sets",
                        "value": stigmataArrayWhole[stigmataChosen][3][2]
                      }, {
                        "name": "3 Sets",
                        "value": stigmataArrayWhole[stigmataChosen][3][4]
                      }]
                    },
                    files: [{
                      attachment: "images/attentionicon.PNG",
                      name: "attentionicon.PNG"
                    }]
                  });
                }





              }
            }
          }

          if (chosen === "▶") {
            newMessage.delete();
            if (stigmataArrayNameTemp.length <= 9) {
              msg.reply("please do not add reaction by yourself.")
            } else {
              stigmataMenuSelected(currentStar, currentPage + 1);
            }
          }

          if (chosen === "❌") {
            newMessage.delete();
          }
          collector.stop();
        });

        if (page > 0) {
          await newMessage.react("◀").catch((error) => {});
        }

        if (stigmataArrayNameTemp.length <= 9) {
          for (i = 0; i < stigmataArrayNameTemp.length; i++) {
            await newMessage.react(reactionNumberArray[i]).catch((error) => {});
          }
        } else {
          for (i = 0; i < 9; i++) {
            await newMessage.react(reactionNumberArray[i]).catch((error) => {});
          }
        }

        if (stigmataArrayNameTemp.length > 9) {
          await newMessage.react("▶").catch((error) => {});
        }

        await newMessage.react("❌").catch((error) => {});

      });

    }

  });
}
