import {getElement} from './Utils.js';
import {people} from './data.js'


const infoContainerDOM=getElement('.info-container');
const btnContainer=getElement('.icon-container');



window.addEventListener('DOMContentLoaded',()=>{

    infoContainerDOM.innerHTML=people.map((person,index)=>{
        const {img,name,job,text}=person;

        return `
        <article class="person">

        <img src="${img}" alt="${name}" class="img review-img">
        <h4 class="name">${name}</h4>
        <h4 class="title">${job}</h4>
        <p class="info">${text}</p>
        <i class="fa-solid fa-quote-right quote-icon"></i>

        </article>

        
        `
    }).join(" ");

    const AllPerosnDOM=getElement('.person','all');

    AllPerosnDOM.forEach((person,index)=>{
        person.style.transform=`translateX(${index * 100 }%)`

    })



    let count=0;

    btnContainer.addEventListener('click',(e)=>{
  
        const btn=e.target.parentElement;
        console.log(btn);
       
       

        if(btn.classList.contains('right-btn')){

            count++;

            if(count>AllPerosnDOM.length-1){
                count=0;
            }

            infoContainerDOM.style.transform=`translateX(-${count * 100}%)`

        }


        if(btn.classList.contains('left-btn')){

            count--;
            
            if(count<0){
                count=AllPerosnDOM.length-1;
            }
            
            infoContainerDOM.style.transform=`translateX(-${count * 100}%)`
        }

   
        

    })
    


})    








