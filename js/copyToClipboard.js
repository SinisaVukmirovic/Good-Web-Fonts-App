import { copyBtnsElem, toCopyElem } from './DOMElems.js';

const copyBtns = copyBtnsElem.querySelectorAll('[data-copy]');
const dataToCopy = toCopyElem.querySelectorAll('[data-copy]');

copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const selectedToCopy = e.target.dataset.copy;

        let copyThis;

        dataToCopy.forEach(data => {
            
            if (selectedToCopy == data.dataset.copy) {
                copyThis = data.innerHTML;
                console.log(copyThis);

                navigator.clipboard.writeText(copyThis);
            }
        });

    });
});













