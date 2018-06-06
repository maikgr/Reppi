const focused = require('./focusedGachaDb.json');
const weaponList = require('./equipmentdb2.json')["weapon"];
const stigmataList = require ('./equipmentdb2.json')["stigmata"];
const seedRandom = require('seedrandom');

module.exports = {
    startGacha : startGacha
}

async function startGacha(msg){
    let gachaResult = [],
        i = 0;

    for(i; i < 9; ++i){        
        gachaResult.push(drawGacha());
    }
    
    if(gachaResult.includes(item => item.rarity > 3)){
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
    return {name: "Item", rarity: 3};
}

function drawWeapon(){
    let focusRate = focused["weapon"]["focusRate"] / focusedWeaponTotalRate(),
        focusWeaponList = focused["weapon"]["focus"],
        offWeaponList = focused["weapon"]["off"],
        dieResult = dieRoll();

    if (dieResult <= focusRate){
        return drawRandomFromList(focusWeaponList, weaponList);
    } else {
        return drawRandomFromList(offWeaponList, random);
    }
}

function drawStigmata(){
    let focusRate = focused["stigmata"]["focusRate"] / focusedStigmataTotalRate(),
        focusStigmataList = getCompleteStigmataList(focused["stigmata"]["focus"]),
        offStigmataList = getCompleteStigmataList(focused["stigmata"]["off"]),
        dieResult = dieRoll();

    if (dieResult <= focusRate) {
        return drawRandomFromList(focusStigmataList, stigmataList);
    } else {
        return drawRandomFromList(offStigmataList, stigmataList);
    }    
}

function drawRandomFromList(filterList, sourceList) {
    let index = getRandomIndex(filterList),
        drawnItem = sourceList.find(function(element){            
            return element["name"] === filterList[index];
        });

    return {name: drawnItem["name"], rarity: drawnItem["rarity"]};
}

function getCompleteStigmataList(stigmataNameList){
    return stigmataList.filter(stigmata => stigmataNameList.includes(stigmata["name"]));
}

function dieRoll(){
    Math.seedRandom();
    return Math.random();
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