var countFiles = require('count-files')
const Discord = require("discord.js");
const client = new Discord.Client();

var standardGacha = require('./standardGacha.js');
var memeFileName;


client.login('NDI0ODA4NDA2NDcwMzYxMDg4.DY-RqQ.X32wbXehoOMzDurLGal26z_l-GM');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

});

function getRandomInt(min, max){
    var intMin = parseInt(min);
    var intMax = parseInt(max);
    return (Math.floor(Math.random() * (intMax-intMin)) + intMin);
}

countFiles('images/random', function (err, results) {
  connectClient(results.files);
});

function connectClient(memeFileTotal){
  client.on('message', msg => {
    var channel = client.channels.get('424485532794355732');
    //378748690095013919 for Repulsion
    if (msg.content === '!gacha') {
      if(msg.channel.name !== 'bot-spam'){
        msg.reply("does this looks like " + channel + " channel to you? If yes, Reppi suggests you to get your eyesight checked.")
      } else {

        memeChance = Math.floor(Math.random() * 100) / 100;
        console.log("memeChance : " + memeChance);

        memeFileName = getRandomInt(1, memeFileTotal + 1);

        if(memeChance < 0.95){
          msg.reply("", {
          file: "./images/random/" + memeFileName + ".JPG"
          });
        } else {
          standardGacha.gachaStart();
          msg.reply("", {
          file: "output.jpg"
          });
        }
      }
    }
  });
}
