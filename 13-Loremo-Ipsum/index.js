import { getElement } from './Utils.js';
import { text } from './app.js';

const submitDOM=getElement('#submit');
const inputDOM=getElement('#paragraph');
const container=getElement('.paragraph-container')


submitDOM.addEventListener('click',(e)=>{
    e.preventDefault();
    let value=inputDOM.value;
    

    if(value>9){
        value=1;
    }

    if(value<1){
        value=1;
    }


    let newText=text.slice(0,value);

    newText=newText.map((item)=>{
        return `<p class="text">${item}</p>`
    }).join("");

 
    container.innerHTML=newText;



    
})



