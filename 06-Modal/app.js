import { getElement } from './Utils.js';


const openBtnDOM=getElement('.modal-btn')
const modalSectionDOM=getElement('.modal-section');
const closeBtnDOM=getElement('#close-btn');


openBtnDOM.addEventListener('click',()=>{

    modalSectionDOM.classList.add('show-modal')


})

closeBtnDOM.addEventListener('click',()=>{

    modalSectionDOM.classList.remove('show-modal')


})



