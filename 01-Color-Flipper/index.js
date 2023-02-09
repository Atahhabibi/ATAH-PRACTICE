import { hexColors,colors } from "./data.js";

const colorBtn=document.querySelector('.color-btn');
const sectionBackground=document.querySelector('.section-center');
const colorCode=document.querySelector('#color-code');



colorBtn.addEventListener('click',()=>{
  
   let index= createRandomNumber();

    sectionBackground.style.background=colors[index];
    colorCode.textContent=colors[index];

})


let temp=0;

const createRandomNumber=()=>{

 let number;

 number= Math.floor(Math.random()*colors.length);

   if(temp!==number){
    temp=number;

   }else{
       number=Math.floor(Math.random()*colors.length);
       if(temp===number){

           number=Math.floor(Math.random()*colors.length);

           if(temp===number){
               number=Math.floor(Math.random()*colors.length);
               temp=number;
           }
       }
   }

   return number;
    
  

}


