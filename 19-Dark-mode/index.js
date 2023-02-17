import {getElement} from './Utils.js';
import { articles } from './data.js';

const ToggleBtnDOM=getElement('.react-btn')
const newHeading=getElement('.')




ToggleBtnDOM.addEventListener('click',()=>{
  
    document.body.classList.toggle('dark-mode')

    
})