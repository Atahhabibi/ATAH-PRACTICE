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
let value=0;

 nextBtnDOM.addEventListener('click',()=>{

    allBtnDOM.forEach((btn)=>{
        if(btn.classList.contains('active')){
            value=parseInt(btn.dataset.value);
            btn.classList.remove('active');
        }

    })

    
    count=value;

    count++;

    if(count>data.length-1){
        count=0;
    }
    
    allBtnDOM[count].classList.add('active');
    displayFollowers(data[count]);
     
 })


 
prevBtnDOM.addEventListener('click',()=>{

    allBtnDOM.forEach((btn)=>{
        if(btn.classList.contains('active')){
            value=parseInt(btn.dataset.value);
            btn.classList.remove('active');
        }

    })

    
    count=value;

    count--;

    if(count<0){
        count=data.length-1;
    }
    
    allBtnDOM[count].classList.add('active');

    displayFollowers(data[count]);

     
 })












}




export {displayButtons}