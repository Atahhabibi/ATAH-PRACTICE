import {getElement} from './Utils.js'

const wikiBtnDOM=getElement('.btn-wiki');
const inputDOM=getElement('.input-wiki');
const resultsContainerDOM=getElement(".result-container");


inputDOM.addEventListener('keyup',()=>{
    const value=inputDOM.value;

    if(!value){
        resultsContainerDOM.innerHTML=`<h5>please enter search term</h5>`
        return; 
    }

    

})




