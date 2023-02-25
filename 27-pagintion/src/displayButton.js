import { getElement } from "../Utils.js"
import { displayFollowers } from "./displayFlowers.js";


const followerBtnDOM=getElement('.follower-btn');
const nextBtnDOM=getElement('.next');
const prevBtnDOM=getElement('.prev');

const displayButtons=(data)=>{

 let newButtons=data.map((item,index)=>{
     return `<button class="page-btn" data-value="${index}">${index+1}</button>`
 }).join(" ");

 followerBtnDOM.innerHTML=newButtons;

 displayFollowers(data[0]);
 const allBtnDOM=getElement('.page-btn','all');
 allBtnDOM[0].classList.add('active');

 
 followerBtnDOM.addEventListener('click',(e)=>{

    const btnDOM=e.target;
    
    if(btnDOM.classList.contains('page-btn')){

        allBtnDOM.forEach((btn)=>{
            btn.classList.remove('active');
        })

        btnDOM.classList.add('active');


        let value=btnDOM.dataset.value;
        value=parseInt(value);

        const targetPageFollower=data[value];
        
        displayFollowers(targetPageFollower);
      
    }

 })


 let count=0;

 nextBtnDOM.addEventListener('click',()=>{

   allBtnDOM.forEach((btn)=>{
       
    let value=btn.dataset.value;
    value=parseInt(value);

    if(count===value){

        allBtnDOM.forEach((item)=>{
            item.classList.remove('active');
        })

        btn.classList.add('active')
    }
          
   })

   count++;

   if(count>data.length-1){
       count=0;
   }

   displayFollowers(data[count]);

     
 })

prevBtnDOM.addEventListener('click',()=>{


    allBtnDOM.forEach((btn)=>{
       
        let value=btn.dataset.value;
        value=parseInt(value);
    
        if(count===value){
    
            allBtnDOM.forEach((item)=>{
                item.classList.remove('active');
            })
    
            btn.classList.add('active')
        }
              
       })
    

   count--;

   if(count<0){
       count=data.length-1;
   }

   displayFollowers(data[count]);


     
 })












}




export {displayButtons}