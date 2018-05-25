const Discord = require("discord.js");
const client = new Discord.Client();

var channelId

const args = process.argv[2];

client.login('NDQ5NTk0OTg0MTYxNjA3NzAw.Dem9fA.QACuQ6iKVSfpuR0hVmSs4pUhjys');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  //var channel = client.channels.get('378748690095013919'); //bot-spam
  var channel = client.channels.get('377979200013074435'); //general

  //channel.send("I'm shutting down.");
  channel.send("" + args);
});
