import { typeSelectElem, fontCardsElem } from './DOMElems.js';

const typeChoices = typeSelectElem.querySelectorAll('[data-type]');
const allFontCards = fontCardsElem.querySelectorAll('[data-type]');

typeChoices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        const selectedType = e.target.dataset.type;
        document.startViewTransition(() => addHiddenAttr(selectedType));
    });
    // keyboard enter key press
    choice.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const selectedType = e.target.dataset.type;
            document.startViewTransition(() => addHiddenAttr(selectedType));
        }
    });
});

const addHiddenAttr = (selectedType) => {
    allFontCards.forEach(card => {
        card.removeAttribute('hidden');
        
        if (selectedType == card.dataset.type) {
            // card.removeAttribute('hidden');
            return;
        }
        card.setAttribute('hidden', true);
    });
}