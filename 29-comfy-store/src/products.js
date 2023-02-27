import './toggleSidebar.js'

import { getElement } from '../Utils.js';
import { fetchProducts } from './fetchProducts.js';
import { displayProducts } from './dipslayProducts.js';


const rangeBtnDOM=getElement('.range');

const companyContainerDOM=getElement('.company-container');
const productsContainerDOM=getElement('.products-container');
const valueDOM=getElement('.value');


let data; 


window.addEventListener('DOMContentLoaded',async()=>{

    data=await fetchProducts();
    displayProducts(data,productsContainerDOM);
    companyButtons(data);
   
    rangeBtnDOM.setAttribute('max',getMaxPrice())
    valueDOM.innerHTML=getMaxPrice();
    rangeBtnDOM.value=getMaxPrice();

 
 })

 
 rangeBtnDOM.addEventListener('input',()=>{

    const value=parseInt(rangeBtnDOM.value);
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


 



