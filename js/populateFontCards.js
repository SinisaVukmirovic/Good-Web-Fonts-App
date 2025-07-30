import { fontFamilies } from "../data/fonts.js";
import { fontCardsElem } from "./DOMElems.js";
import shuffle from './shuffle.js';

const shuffledFonts = shuffle(fontFamilies);

// shuffledFonts.forEach(font => {
shuffledFonts.forEach(( { fontName, fontType } = font ) => {
    let pathAndVTName;

    if (fontName.includes(' ')) {
        pathAndVTName = fontName.replaceAll(' ', '-');
    } else {
        pathAndVTName = fontName;
    }

    fontCardsElem.innerHTML += `
        <a href="./font-pages/${pathAndVTName}.html" data-type=${fontType}>
            <div class="card-sample" style="view-transition-name: card-${pathAndVTName};">
                <div class="font-name-type">
                    <h3 style="view-transition-name: title-${pathAndVTName};">${fontName}</h3>
                    <span>${fontType}</span>
                </div>
                <div class="sample-img">
                    <img src="./samples/${pathAndVTName}.png" alt="Sample of font family">
                </div>
            </div>
        </a>
    `;
});