import { formatPrice, getElement } from '../Utils.js';
import { getProductsFormLocalStorage, } from './currentCart.js';
import { removeProductFromLocalStorage } from './currentCart.js';



const cartOverlyContainerDOM=getElement('.cart-overlay-container');

const displayCartItem=()=>{


 let products=getProductsFormLocalStorage();



 if(products.length===0){
    cartOverlyContainerDOM.innerHTML=" ";
    return; 
 }


 let newProducts=products.map((item)=>{
     
     const {name,img,price,id}=item;


    return `<article class="cart-overlay-product">
    
                    <img src="${img}" alt="product" class="img cart-overlay-img">
    
                    <div class="cart-overlay-product-info">
    
                        <h5 class="cart-overlay-name">${name}</h5>
                        <h5 class="cart-overlay-price">${formatPrice(price)}</h5>
                        <button class="cart-overlay-btn" data-id="${id}">remove</button>
    
                    </div>
    
                    <div class="cart-overlay-toggle-btn">
    
                        <button class="increase-btn"><i class="fa-solid fa-angle-up"></i></button>
                        <span class="cart-overlay-value">1</span>
                        <button class="decrease-btn"><i class="fa-solid fa-angle-down"></i></button>
    
                    </div>
    
    
                </article>  `;



 }).join(" ")


     cartOverlyContainerDOM.innerHTML=newProducts;

     const removeBtnDOMs=getElement('.cart-overlay-btn','all');

     removeBtnDOMs.forEach((btn)=>{
           btn.addEventListener('click',(e)=>{
           const id=e.target.dataset.id;
           removeProductFromLocalStorage(id);
           displayCartItem();
        })
    })


}






export {displayCartItem}