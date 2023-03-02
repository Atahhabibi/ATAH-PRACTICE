import { formatPrice, getElement } from '../Utils.js';
import { getProductsFormLocalStorage } from './currentCart.js';
import { displayCartItem } from './displayCartItem.js';


const cartsidebarBtn=getElement('.cart-btn');
const cartOverlayDOM=getElement('.cart-overlay');
const closeBtnCartOverlay=getElement('.cart-close-btn');
const valueDOMCartTotal=getElement('.total-item-span');
const cartTotalDOM=getElement('.total-value');


showCartTotalItems();


cartsidebarBtn.addEventListener('click',()=>{
    cartOverlayDOM.classList.add('show-cart');
    displayCartItem();
    showTotalAmountMoney();
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


function showTotalAmountMoney(){


    let tempArray=getProductsFormLocalStorage();

    let totalMoney=tempArray.reduce((total,item)=>{

        let price=item.price;
        let amount=item.amount;

        total+=(price*amount);

        return total;

    },0)

    totalMoney=formatPrice(totalMoney);

    cartTotalDOM.textContent=totalMoney;

}







export {showCartTotalItems,showTotalAmountMoney}
