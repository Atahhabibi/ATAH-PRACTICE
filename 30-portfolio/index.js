import {getElement} from './Utils.js';


const toggleBtn=getElement('.toggle-btn');
const linksContainerDOM=getElement('.page-links');

toggleBtn.addEventListener('click',()=>{

    linksContainerDOM.classList.toggle('show-links');
})


