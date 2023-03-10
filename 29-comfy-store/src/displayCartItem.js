import { formatPrice, getElement } from '../Utils.js';
import { getProductsFormLocalStorage, handleCurrentCart, setProductsToLocalStorage, } from './currentCart.js';
import { removeProductFromLocalStorage } from './currentCart.js';
import { showCartTotalItems, showTotalAmountMoney } from './toggleCartbar.js';



const cartOverlyContainerDOM=getElement('.cart-overlay-container');

const displayCartItem=()=>{

let products=getProductsFormLocalStorage()

 if(products.length===0){
    cartOverlyContainerDOM.innerHTML=" ";
    return; 
 }


 let newProducts=products.map((item)=>{
     
     const {name,img,price,id,amount}=item;


    return `<article class="cart-overlay-product">
    
                    <img src="${img}" alt="product" class="img cart-overlay-img">
    
                    <div class="cart-overlay-product-info">
    
                        <h5 class="cart-overlay-name">${name}</h5>
                        <h5 class="cart-overlay-price">${formatPrice(price)}</h5>
                        <button class="cart-overlay-btn" data-id="${id}">remove</button>
    
                    </div>
    
                    <div class="cart-overlay-toggle-btn">
    
                        <button class="increase-btn" data-id="${id}"><i class="fa-solid fa-angle-up"></i></button>
                        <span class="cart-overlay-value">${amount}</span>
                        <button class="decrease-btn" data-id="${id}"><i class="fa-solid fa-angle-down"></i></button>
    
                    </div>
    
    
                </article>  `;



 }).join(" ")


     cartOverlyContainerDOM.innerHTML=newProducts;

     const removeBtnDOMs=getElement('.cart-overlay-btn','all');

     const changeBtnDOMs=getElement('.cart-overlay-toggle-btn','all');

     removeBtnDOMs.forEach((btn)=>{
           btn.addEventListener('click',(e)=>{
           const id=e.target.dataset.id;
           removeProductFromLocalStorage(id);
           displayCartItem();
           showTotalAmountMoney();
           showCartTotalItems();
        })
    })

    changeBtnDOMs.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{

            const element=e.target.parentElement;
            const elementID=element.dataset.id;

            

            if(element.classList.contains('increase-btn')){

                let tempArray=getProductsFormLocalStorage();

                tempArray=tempArray.map((item)=>{

                    if(item.id===elementID){
                        item.amount++;
                    }
                    return item; 

                })

                let tempObject=tempArray.find((item)=>item.id===elementID);

                removeProductFromLocalStorage(elementID);

                setProductsToLocalStorage(tempObject);

                showTotalAmountMoney();

                tempArray=getProductsFormLocalStorage();
                tempObject=tempArray.find((item)=>item.id===elementID);

                const valueCounterDOM=element.nextElementSibling;
                valueCounterDOM.textContent=tempObject.amount; 
                
            }

            if(element.classList.contains('decrease-btn')){

                let tempArray=getProductsFormLocalStorage();

                tempArray=tempArray.map((item)=>{

                    if(item.id===elementID){
                        item.amount--;
                    }

                    return item; 

                })

                let tempObject=tempArray.find((item)=>item.id===elementID);

                removeProductFromLocalStorage(elementID);

                setProductsToLocalStorage(tempObject);
                showTotalAmountMoney();

                tempArray=getProductsFormLocalStorage();
                tempObject=tempArray.find((item)=>item.id===elementID);

                if(tempObject.amount<1){

                    removeProductFromLocalStorage(elementID);
                    displayCartItem();
                }

                const valueCounterDOM=element.previousElementSibling;
                valueCounterDOM.textContent=tempObject.amount; 
                
            }

        })
    })






}






export {displayCartItem}