import './toggleSidebar.js'

import { formatPrice, getElement } from '../Utils.js';
import { fetchProducts } from './fetchProducts.js';
import { displayProducts } from './dipslayProducts.js';


const rangeBtnDOM=getElement('.range');
const companyContainerDOM=getElement('.company-container');
const productsContainerDOM=getElement('.products-container');
const valueDOM=getElement('.value');
const searchInputDOM=getElement('.search-input');


let data; 


window.addEventListener('DOMContentLoaded',async()=>{

    data=await fetchProducts();
    displayProducts(data,productsContainerDOM);
    companyButtons(data);

   const companyBtnDOMs=getElement('.company-btn','all');

   companyBtnDOMs.forEach((btn)=>{
      btn.addEventListener('click',(e)=>{

         searchInputDOM.value="";
         
         e.preventDefault()
         const value=e.target.dataset.value;

         if(value==='all'){
            displayProducts(data,productsContainerDOM)
         }else{
            let newData=data.filter((item)=>item.company===value);
            displayProducts(newData,productsContainerDOM);
         }

      })
   })


    let newMax=getMaxPrice();
    newMax=newMax/100;
    newMax=Math.ceil(newMax)
    
    rangeBtnDOM.setAttribute('max',newMax)

   
    valueDOM.innerHTML=newMax;  
    rangeBtnDOM.value=newMax;



 
 })





 searchInputDOM.addEventListener('keyup',()=>{
   const value=searchInputDOM.value;


   let newData=data.filter((item)=>{

      if(item.name.startsWith(value)){
         return item;
      }

   });

   
   displayProducts(newData,productsContainerDOM)



 })


 
 rangeBtnDOM.addEventListener('input',()=>{

   searchInputDOM.value="";

   let value=parseInt(rangeBtnDOM.value);


    let newData=data.filter((item)=>{

      let newPrice=formatPrice(item.price).slice(1)

     newPrice=Math.ceil(newPrice);
   
     if(newPrice<=value){
      return item;
     }

     

    });

    displayProducts(newData,productsContainerDOM)

    valueDOM.innerHTML=value;


    
 })



















 function companyButtons(data){

    let newData=data;

    newData= new Set(data.map((item)=>item.company));

    newData=['all',...newData]

    newData=newData.map((item)=>{
        return ` <button class="company-btn" data-value="${item}">${item}</button>  `
    }).join(" ");


    companyContainerDOM.innerHTML=newData;

 }


 function getMaxPrice(){

   let maxPrice;
    maxPrice=data.map((item)=>item.price);
    maxPrice=Math.max(...maxPrice);
    return maxPrice;

 }


 



