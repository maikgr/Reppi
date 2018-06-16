const Jimp = require("jimp");
const rareContainerPath = './images/equipment/containerrare.png';
const normalContainerPath = './images/equipment/containernormal.png';
const gachaBgPath = './images/gachabg.jpg';

let filename = 'test.png';
module.exports = {
    gachaBuilder: gachaBuilder
}

function gachaBuilder(msg, gachaArr) {
    let jimps = [
        Jimp.read(gachaBgPath)
    ]

    for (let i = 0; i < gachaArr.length; ++i) {
        let rarity = gachaArr[i]['rarity'],
            image = gachaArr[i]['image'],
            name = gachaArr[i]['name'];

        if (rarity > 3) {
            jimps.push(createImageLayout(rareContainerPath, image, name));
        } else {
            jimps.push(createImageLayout(normalContainerPath, image, name));
        }
    }

    Promise.all(jimps)
        .then(function (jimps) {
            let background = jimps[0];

            let imageMargin = 40,
                colCount = 3,
                rowCount = Math.ceil(gachaArr.length / colCount),
                colWidth = Math.floor(background.bitmap.width / colCount);

            let jimpsIndex = 1;
            for (let x = 0; x < colCount; ++x) {
                for (let y = 0; y < rowCount; ++y) {
                    if (jimpsIndex < jimps.length) {
                        let item = jimps[jimpsIndex++],
                            itemPosX = (x * colWidth),
                            itemPosY = (y * item.bitmap.height) + imageMargin;

                        background.composite(item, itemPosX, itemPosY);
                    }
                }
            }

            background.write(filename, function () {
                msg.reply('', { file: filename });
            });
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
    });
}