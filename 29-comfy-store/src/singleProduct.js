import './toggleCartbar.js'
import './toggleSidebar.js'
import { getElement } from '../Utils.js';
import { fetchSingleProduct } from './fetchSingleProduct.js';
import { displaySingleProducts } from './displaySingleProduct.js';


const cartOverlayDOM=getElement('.cart-overlay');
const SingleContainerDOM=getElement('.single-container');
const navigateNameDOM=getElement('.navigate-name');




window.addEventListener('DOMContentLoaded',async()=>{

    let id=window.location.search;
    id=new URLSearchParams(id);
    id=id.get('id');


    const data=await fetchSingleProduct(id);

   

    const name=data[0].name;
    document.title=name.toUpperCase();
    navigateNameDOM.innerHTML=name;

    
    displaySingleProducts(data,SingleContainerDOM)

    const addToCartBtnDOM=getElement('.add-to-cart-btn');

    addToCartBtnDOM.addEventListener('click',()=>{
        
        cartOverlayDOM.classList.add('show-cart');


    })

    



})


