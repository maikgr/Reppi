const Discord = require('discord.js');

const client = new Discord.Client();
const focused = require('./focusedGachaDb.json');
const weaponList = require('./equipmentdb2.json')["weapon"];
const stigmataList = require ('./equipmentdb2.json')["stigmata"];
const seedRandom = require('seedrandom');

client.login(process.env.DISCORD_API_KEY);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
    if (msg.content === '!ping') {
        msg.channel.send('pong!');
    }
    else if (msg.content === '!!focused') {
        startGacha(msg);
    }
});

function startGacha(msg){
    let gachaResult = [],
        i = 0;

    for(i; i < 9; ++i){        
        gachaResult.push(drawGacha());
    }
    
    let rareResult
    if(gachaResult.includes(item => item["rarity"] > 3)){
        gachaResult.push(drawGacha());
    } else {
        gachaResult.push(drawFocused());
    }
    
    let resultNames = gachaResult.map(item => item["name"]),
        message = resultNames.join(', ');
    msg.reply(message).catch(err => console.log(err));
}

function drawGacha(){
    let dieResult = dieRoll();
    
    if (dieResult <= focusedTotalRate()){
        return drawFocused();
    } else {
        return drawOthers();
    }
}

function drawFocused(){
    let weaponRate = focusedWeaponTotalRate() / focusedTotalRate(),
        dieResult = dieRoll();

    if (dieResult <= weaponRate){
        return drawWeapon();
    } else {
        return drawStigmata();
    }
}

function drawOthers(){
    return {name: "Item", rarity: 1};
}

function drawWeapon(){
    let focusRate = focused["weapon"]["focusRate"] / focusedWeaponTotalRate(),
        focusWeaponList = getFilteredList(weaponList, focused["weapon"]["focus"]),
        offWeaponList = getFilteredList(weaponList, focused["weapon"]["off"]),
        dieResult = dieRoll();

    if (dieResult <= focusRate){
        return drawRandomFromList(focusWeaponList);
    } else {
        return drawRandomFromList(offWeaponList);
    }
}

function drawStigmata(){
    let focusRate = focused["stigmata"]["focusRate"] / focusedStigmataTotalRate(),
        focusStigmataList = getFilteredList(stigmataList, focused["stigmata"]["focus"]),
        offStigmataList = getFilteredList(stigmataList, focused["stigmata"]["off"]),
        dieResult = dieRoll();

    if (dieResult <= focusRate) {
        return drawRandomFromList(focusStigmataList);
    } else {
        return drawRandomFromList(offStigmataList);
    }    
}

function drawRandomFromList(list) {
    let drawnItem = list[getRandomIndex(list)];    
    return {name: drawnItem["name"] + ' - ' + drawnItem["type"], rarity: drawnItem["rarity"]};
}

function getFilteredList(sourceList, filterList){
    return sourceList.filter(item => filterList.includes(item["name"]));
}

function dieRoll(){
    Math.seedrandom();
    return Math.random() * 100;
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * (array.length)); 
}

function focusedTotalRate() {
    return focusedWeaponTotalRate() + focusedStigmataTotalRate();
}

function focusedWeaponTotalRate(){
    return focused["weapon"]["focusRate"] + focused["weapon"]["offRate"];
}

function focusedStigmataTotalRate(){
    return focused["stigmata"]["focusRate"] + focused["stigmata"]["offRate"];
}