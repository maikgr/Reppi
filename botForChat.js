const Discord = require("discord.js");
const client = new Discord.Client();

var channelId

const args = process.argv[2];

client.login('NDI0ODA4NDA2NDcwMzYxMDg4.DY-RqQ.X32wbXehoOMzDurLGal26z_l-GM');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  var channel = client.channels.get('378748690095013919'); //bot-spam
  //var channel = client.channels.get('423091913852190720'); //general

  //channel.send("I'm shutting down.");
  channel.send("" + args);
});
