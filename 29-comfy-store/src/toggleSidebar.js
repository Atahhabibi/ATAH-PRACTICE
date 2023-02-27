import { getElement } from "../Utils.js";

const toggleBtn=getElement('.toggle-btn');
const closeBtnDOM=getElement('.close-btn');

const modalOverlayDOM=getElement('.modal-overlay')

toggleBtn.addEventListener('click',()=>{
    modalOverlayDOM.classList.add('show-modal')
})

closeBtnDOM.addEventListener('click',()=>{
    modalOverlayDOM.classList.remove('show-modal')
})



