import {getElement} from './Utils.js';


const toggleBtn=getElement('.toggle-btn');
const linksContainerDOM=getElement('.page-links');
const closeBtnDOM=getElement('.close-btn');

toggleBtn.addEventListener('click',()=>{
    linksContainerDOM.classList.add('show-links');
})

closeBtnDOM.addEventListener('click',()=>{
    linksContainerDOM.classList.remove('show-links')
})


