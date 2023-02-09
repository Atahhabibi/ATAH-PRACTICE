
import { reviews } from "./data.js";

const btnCotainer=document.querySelector('.btn-container');
const supriseBtn=document.querySelector('.surprise-btn');
const personName=document.querySelector('.person-name');
const personTile=document.querySelector('.person-title');
const personText=document.querySelector('.text');
const personImgDom=document.querySelector('.img');

let count=0;
let person;

btnCotainer.addEventListener('click',(e)=>{
    const btn=e.target.parentElement;
    
    if(btn.classList.contains('increase')){
        count++;

       if(count>reviews.length-1){
           count=0;
       }
       person=reviews[count];
        
    }
    if(btn.classList.contains('decrease')){
        count--;
        if(count<0){
            count=reviews.length-1;
        }

        person=reviews[count]
        
    }
    const{name,job,img,text}=person;

    personName.textContent=name;
    personTile.textContent=job;
    personText.textContent=text;
    personImgDom.src=img;

    
})

window.addEventListener('DOMContentLoaded',()=>{
    
    person=reviews[0]
    const{name,job,img,text}=person;
    personName.textContent=name;
    personTile.textContent=job;
    personText.textContent=text;
    personImgDom.src=img;
})
