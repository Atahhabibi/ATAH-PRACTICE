import { getElement } from './Utils.js';

const btnContainerDOM=getElement('.btn-container')
const imgContainerDOM=getElement('.img-container');

let count=0;


btnContainerDOM.addEventListener('click',(e)=>{

    const element=e.target;

    if(element.classList.contains('next-btn')){
        count++;

        const prevBtnDOM=element.previousElementSibling;

        if(imgContainerDOM.children.length-2<count){
            element.style.display="none";
        }


        imgContainerDOM.style.transform=`translateX(-${count}00%)`;

        prevBtnDOM.style.display="inline-block"
        
    }

    if(element.classList.contains('prev-btn')){
          count--;

        const nextBtnDOM=element.nextElementSibling;
    
        if(count===0){
            element.style.display="none";
            nextBtnDOM.display="inline-block";
        }

        if(count>0){
          

            element.style.display="visible";
            nextBtnDOM.style. display="inline-block";
        }


        imgContainerDOM.style.transform=`translateX(-${count}00%)`


    }

})

