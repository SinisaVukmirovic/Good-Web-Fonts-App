import { copyBtnsElem, toCopyElem } from './DOMElems.js';
// console.log(copyBtnsElem)

// const btnsElem = document.querySelector('[data-copy-btns]');
// console.log(btnsElem)
const copyBtns = copyBtnsElem.querySelectorAll('[data-copy]');
// console.log(copyBtns)


const dataToCopy = toCopyElem.querySelectorAll('[data-copy]');
// console.log(dataToCopy)

// dataToCopy.forEach(data => {
//     console.log(data.dataset.copy);
// });


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
            // console.log(copyThis);
        });
        // console.log(selectedToCopy);

        // if (selectedToCopy == 'link') {
        //     const HTMLlink = document.querySelector('p.html-link').innerHTML;
        //     console.log(HTMLlink)
        // }
        // if (selectedToCopy == 'import') {
        //     const CSSimport = document.querySelector('p.css-import').innerHTML;
        //     console.log(CSSimport)
        // }
        // if (selectedToCopy == 'styles') {
        //     const CSSstyles = document.querySelector('p.css-styles').innerHTML;
        //     console.log(CSSstyles)
        // }


    });
});













