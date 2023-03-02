import { getElement } from '../Utils.js';
import { getProductsFormLocalStorage } from './currentCart.js';
import { displayCartItem } from './displayCartItem.js';


const cartsidebarBtn=getElement('.cart-btn');
const cartOverlayDOM=getElement('.cart-overlay');
const closeBtnCartOverlay=getElement('.cart-close-btn');
const valueDOMCartTotal=getElement('.total-item-span');


showCartTotalItems();

cartsidebarBtn.addEventListener('click',()=>{
    cartOverlayDOM.classList.add('show-cart');
    displayCartItem();
})


closeBtnCartOverlay.addEventListener('click',()=>{
    cartOverlayDOM.classList.remove('show-cart');
    showCartTotalItems();
})




function showCartTotalItems(){

    let store=getProductsFormLocalStorage();

    let total=store.reduce((total,item)=>{

        total=total+item.amount; 
        return total;

    },0)


    valueDOMCartTotal.textContent=total;

}



export {showCartTotalItems}
