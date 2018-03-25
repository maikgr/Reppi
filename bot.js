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
  });
}
