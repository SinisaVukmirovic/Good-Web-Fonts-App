import { fontFamilies } from "../data/fonts.js";
import { fontCardsElem } from "./DOMElems.js";
import shuffle from './shuffle.js';

const shuffledFonts = shuffle(fontFamilies);

// shuffledFonts.forEach(font => {
shuffledFonts.forEach(( { pathAndVtName, fontType, fontName } = font ) => {
    fontCardsElem.innerHTML += `
        <a href="./font-pages/${pathAndVtName}.html" data-type=${fontType}>
            <div class="card-sample" style="view-transition-name: card-${pathAndVtName};">
                <div class="font-name-type">
                    <h3 style="view-transition-name: title-${pathAndVtName};">${fontName}</h3>
                    <span>${fontType}</span>
                </div>
                <div class="sample-img">
                    <img src="./samples/${pathAndVtName}.png" alt="Sample of font family">
                </div>
            </div>
        </a>
    `;
});