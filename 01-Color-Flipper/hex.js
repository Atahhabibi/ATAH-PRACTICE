
import { hexColors } from "./data.js";
const colorBtn=document.querySelector('.color-btn');
const sectionBackground=document.querySelector('.section-center');
const colorCode=document.querySelector('#color-code');



colorBtn.addEventListener('click',()=>{

    const index_1=createRandomNumber();
    const index_2=createRandomNumber();
    const index_3=createRandomNumber();
    const index_4=createRandomNumber();
    const index_5=createRandomNumber();
    const index_6=createRandomNumber();

    sectionBackground.style.background=`#${hexColors[index_1]}${hexColors[index_2]}${hexColors[index_3]}${hexColors[index_4]}${hexColors[index_5]}${hexColors[index_5]}`
    colorCode.textContent=`#${hexColors[index_1]}${hexColors[index_2]}${hexColors[index_3]}${hexColors[index_4]}${hexColors[index_5]}${hexColors[index_6]}`
    

})



let temp=0;

const createRandomNumber=()=>{

 let number;

 number= Math.floor(Math.random()*hexColors.length);

   if(temp!==number){
    temp=number;
    return number;

   }else{
       number=Math.floor(Math.random()*hexColors.length);
       if(temp===number){
           number=Math.floor(Math.random()*hexColors.length);
           temp=number;   
       }
      return number;
   }
    
  

}


