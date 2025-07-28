import { fontFamilies } from "../data/fonts.js";
import { fontCardsElem } from "./DOMElems.js";

fontFamilies.forEach(font => {
    fontCardsElem.innerHTML += `
        <a href="./font-pages/${font.fontName}.html" data-type=${font.fontType}>
            <div class="card-sample" style="view-transition-name: card-${font.fontName};">
                <div class="font-name-type">
                    <h3 style="view-transition-name: title-${font.fontName};">${font.fontName}</h3>
                    <span>${font.fontType}</span>
                </div>
                <div class="sample-img" style="view-transition-name: sample-${font.fontName};">
                    <img src="./samples/${font.fontName}.png" alt="Sample of font family">
                </div>
            </div>
        </a>
    `;
});