const lmaodb = require('./src/database/standardGachadb').valkyrie;
let arraylol = [];

for (i = 0; i < lmaodb.length; i++){
	if (lmaodb[i]['rarity'] === 2){
		arraylol.push(lmaodb[i]);
	}
}

console.log(arraylol);