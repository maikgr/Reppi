const request = require('request');
const seedRandom = require('seedrandom');
const weaponList = require('./equipmentdb2.json')["weapon"];
const stigmataList = require ('./equipmentdb2.json')["stigmata"];

let focused;

module.exports = {
    initialize : initialize,
    startGacha : startGacha
}

function initialize(){
    request('https://pastebin.com/raw/PQBdWSr7', function (error, response, body){     
        if (error !== null) {
            console.log('Error: ', error);
            console.log('Status Code: ', response && response.statusCode);
        }

        focused = JSON.parse(body);
    });
}

function startGacha(){
    let gachaResult = [],
        i = 0;

    for(i; i < 9; ++i){        
        gachaResult.push(drawGacha());
    }
    
    let rareExists = gachaResult.find(function(item){
            return item["rarity"] > 3;
        });

    if(rareExists){
        gachaResult.push(drawGacha());
    } else {
        gachaResult.push(drawFocused());
    }
    
    return gachaResult.map(item => item["name"]);
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
    let weaponRate = (focusedWeaponTotalRate() / focusedTotalRate()) * 100,
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
    let focusRate = (focused["weapon"]["focusRate"] / focusedWeaponTotalRate()) * 100,
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
    let focusRate = (focused["stigmata"]["focusRate"] / focusedStigmataTotalRate()) * 100,
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
    return {name: '(' + sentenceCase(drawnItem["type"]) + ') ' + drawnItem["name"], rarity: drawnItem["rarity"]};
}

function getFilteredList(sourceList, filterList){
    return sourceList.filter(item => filterList.includes(item["name"]) && item["type"] !== "set");
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

function sentenceCase(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}