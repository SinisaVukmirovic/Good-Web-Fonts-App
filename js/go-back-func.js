// go back functionality when clicked outside of card
import { cardElem } from "./DOMElems.js";

document.addEventListener('click', (e) => {
    // Check if the clicked element is NOT inside my element
    if (cardElem.contains(e.target)) {
        // console.log('card')
        return;
    }
    // console.log('not card');
    history.back();
});