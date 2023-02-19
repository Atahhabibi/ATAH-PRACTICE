import { getElement } from "./Utils.js";

const allBtnDOM=getElement('.icon-btn','all');

export const removeActive=()=>{
    allBtnDOM.forEach((btn)=>{
        btn.classList.remove('active');
    })

}