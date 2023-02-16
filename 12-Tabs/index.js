import {getElement} from './Utils.js'


const btnContainer=getElement('.btn-container');
const aboutParagraphDOMs=getElement('.about-paragraph div',"all");



btnContainer.addEventListener('click',(e)=>{
    const element=e.target;
    let value=element.dataset.value;
    value=value.toLowerCase();

    const paraDOM=getElement(`.${value}`);
    
    paraDOM.style.display='block';

    aboutParagraphDOMs.forEach((item)=>{
        if(paraDOM!==item){
            item.style.display='none';
        }
    })

    

   
})