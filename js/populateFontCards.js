import { fontFamilies } from "../data/fonts.js";
import { fontCardsElem } from "./DOMElems.js";
import shuffle from './shuffle.js';

const shuffledFonts = shuffle(fontFamilies);

shuffledFonts.forEach(font => {
    fontCardsElem.innerHTML += `
        <a href="./font-pages/${font.pathAndVtName}.html" data-type=${font.fontType}>
            <div class="card-sample" style="view-transition-name: card-${font.pathAndVtName};">
                <div class="font-name-type">
                    <h3 style="view-transition-name: title-${font.pathAndVtName};">${font.fontName}</h3>
                    <span>${font.fontType}</span>
                </div>
                <div class="sample-img">
                    <img src="./samples/${font.pathAndVtName}.png" alt="Sample of font family">
                </div>
            </div>
        </a>
    `;
});