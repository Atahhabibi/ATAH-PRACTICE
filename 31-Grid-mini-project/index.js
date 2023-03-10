import {getElement} from './Utils.js';

const toggleBtn=getElement('.toggle-btn');
const pagesLinksDOM=getElement('.pages-links');

toggleBtn.addEventListener('click',()=>{
    pagesLinksDOM.classList.toggle('show-links');
})

