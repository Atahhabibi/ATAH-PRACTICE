import { getElement } from "./Utils.js";
import { removeActive } from "./removeActive.js";

const allBtnDOM=getElement('.icon-btn','all');
const imageDOM=getElement('.person-img');
const categoryDOM=getElement('.category');
const categoryInfoDOM=getElement('.category-info');
const iconContainerDOM=getElement('.icons-container');

export const displayUser=(data)=>{
    
    const {name:{first,last},location:{street:{number,name},city},email,login:{password},dob:{age},phone,picture:{large}}=data.results[0];

    const fullname=`${first} ${last}`;
    const address=`${number} ${name} `;
    const img=large;

    const person={fullname,address,img,email,password,age,phone};

    imageDOM.src=img;
    categoryDOM.textContent=`My name is`;
    categoryInfoDOM.textContent=fullname;


    allBtnDOM.forEach((btn)=>{

       if(btn.classList.contains('email')){
           btn.setAttribute('value',email)
       }
       if(btn.classList.contains('phone')){
           btn.setAttribute('value',phone)
       }
       if(btn.classList.contains('address')){
           btn.setAttribute('value',address)
       }
       if(btn.classList.contains('age')){
           btn.setAttribute('value',age)
       }
       if(btn.classList.contains('name')){
           btn.setAttribute('value',fullname)
           
       }
       if(btn.classList.contains('password')){
           btn.setAttribute('value',password)
       }


    })


    iconContainerDOM.addEventListener('click',async(e)=>{
    
        const element=e.target.parentElement;
    
    
        if(element.classList.contains('icon-btn')){
    
            const value=element.getAttribute('value');
            const className=element.classList[1];
    
            categoryDOM.innerHTML=`My ${className} is`
            categoryInfoDOM.textContent=value;
            removeActive();
            
            element.classList.add('active');
    
        }
    
    })





    removeActive();
    allBtnDOM[0].classList.add('active');


   
}