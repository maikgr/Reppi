const Jimp = require("jimp");
const rareContainerPath = './images/equipment/containerrare.png';
const normalContainerPath = './images/equipment/containernormal.png';
const gachaBgPath = './images/gachabg.jpg';

module.exports = {
    gachaBuilder: buildGachaResultImage
}

function buildGachaResultImage(gachaArr) {
    let gachaAssets = getGachaAssets(gachaArr);
    return combineImage(gachaAssets, gachaArr);
}

function getGachaAssets(gachaArr) {
    let jimps = [];

    for (let i = 0; i < gachaArr.length; ++i) {
        if (gachaArr[i]['rarity'] > 3) {
            jimps.push(createImageLayout(rareContainerPath, gachaArr[i]['image'], gachaArr[i]['name']));
        } else {
            jimps.push(createImageLayout(normalContainerPath, gachaArr[i]['image'], gachaArr[i]['name']));
        }
    }

    return jimps;
}

function combineImage (gachaAssets, gachaArr) {
    gachaAssets.push(Jimp.read(gachaBgPath));

    return Promise.all(gachaAssets)
    .then(function (assets) {
        let assetIndex = 0,
            assetMaxIndex = assets.length - 1;
        let background = assets[assetMaxIndex];
        let imageMargin = 40,
            colCount = 3,
            rowCount = Math.ceil(gachaArr.length / colCount),
            colWidth = Math.floor(background.bitmap.width / colCount);
        
        for (let x = 0; x < colCount; ++x) {
            for (let y = 0; y < rowCount; ++y) {
                if (assetIndex < assetMaxIndex) {
                    let item = assets[assetIndex++],
                        itemPosX = (x * colWidth),
                        itemPosY = (y * item.bitmap.height) + imageMargin;

                    background.composite(item, itemPosX, itemPosY);
                }
            }
        }

        return background;
    })
    .catch(function (e){
        console.log(e.message);
    });
}

function createImageLayout(containerPath, itemPath, itemName) {
    return Promise.all([
        new Jimp(426, 147),
        Jimp.read(containerPath),
        Jimp.read(itemPath),
        Jimp.loadFont(Jimp.FONT_SANS_32_BLACK)
    ])
    .then(function (images) {
        let container = images[1],
            itemImage = images[2].cover(108, 108),
            font = images[3];

        let imageMargin = 15,
            imageTextMargin = 10,
            leftMargin = 10,
            textPosX = container.bitmap.width + imageTextMargin + leftMargin,
            textPosY = (container.bitmap.height / 2) - 20,
            textWidth = images[0].bitmap.width - imageTextMargin - container.bitmap.width;

        return images[0].fade(1)
            .composite(container, leftMargin, 0)
            .composite(itemImage, imageMargin + leftMargin, imageMargin)
            .print(font, textPosX, textPosY, itemName, textWidth);
    })
    .catch(function (e){
        console.log(e.message);
    });
}