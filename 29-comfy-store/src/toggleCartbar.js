import { getElement } from '../Utils.js';
import { getProductsFormLocalStorage, handleCurrentCart } from './currentCart.js';
import { displayCartItem } from './displayCartItem.js';


const cartsidebarBtn=getElement('.cart-btn');
const cartOverlayDOM=getElement('.cart-overlay');
const closeBtnCartOverlay=getElement('.cart-close-btn');



cartsidebarBtn.addEventListener('click',()=>{
    cartOverlayDOM.classList.add('show-cart');
    displayCartItem();
})


closeBtnCartOverlay.addEventListener('click',()=>{
    cartOverlayDOM.classList.remove('show-cart');
})




