const Jimp = require("jimp");
const stigTopIcon = './images/equipment/stigmata/top.png';
const stigMidIcon = './images/equipment/stigmata/middle.png';
const stigBotIcon = './images/equipment/stigmata/bottom.png';
const itemContainer = './images/equipment/container.png';

module.exports = {
     buildStigmata : buildStigmata
}

async function buildStigmata (msg, stigmata) {
    let filename = "focused.jpg";
    let stig = await loadJimpFromUrl(stigmata["image"]);
    let icon = await getStigmataTypeIcon(stigmata["type"]);
    console.log(stig);
    Jimp.read(itemContainer).then(function(image) {
        let centerWidth = image.bitmap.width / 2;
        let centerHeight = image.bitmap.height / 2;
        
        console.log("reading stigmata");
        image.composite(stig, 1, 1);
        console.log("writing file");
        image.quality(50).write(filename);
        console.log("replying");
        msg.reply('', {file: './' + filename});     
    }).catch(function(err){
        console.error("Error:", err);
    });
}

async function getStigmataTypeIcon(type){
    if (type === 'top'){
        return await loadJimpFromUrl(stigTopIcon);
    } else if (type === 'mid'){
        return await loadJimpFromUrl(stigMidIcon);
    } else if (type === 'bottom'){
        return await loadJimpFromUrl(stigBotIcon);
    }
    return null;
}

async function loadJimpFromUrl(url){
    console.log('reading ' + url);
    Jimp.read(url).then(function(image){
        return image.clone();
    });
}