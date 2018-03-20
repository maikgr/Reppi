const Discord = require("discord.js");
const client = new Discord.Client();

var standardGacha = require('./standardGacha.js');

/*
client.login('NDI0ODA4NDA2NDcwMzYxMDg4.DY-RqQ.X32wbXehoOMzDurLGal26z_l-GM');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  var channel = client.channels.get('424485532794355732');
  //378748690095013919 for Repulsion
  if (msg.content === '!gacha') {
    if(msg.channel.name !== 'bot-spam'){
      msg.reply("does this looks like " + channel + " channel to you? If yes, Reppi suggests you to get your eyesight checked.")
    } else {

      memeChance = Math.floor(Math.random() * 100) / 100;
      console.log("memeChance : " + memeChance);
      if(memeChance < 0.05){
        msg.reply("", {
        file: "./images/random/1.jpg"
        });
      } else {
        gachaStart();
        msg.reply("", {
        file: "output.jpg"
        });
      }
    }
  }
});
*/

setInterval(function() {
  console.time('test');
  standardGacha.gachaStart();
  console.timeEnd('test');
}, 200);
