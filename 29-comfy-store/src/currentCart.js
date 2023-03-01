import { getElement } from '../Utils.js';
import { displayCartItem } from './displayCartItem.js';
import { fetchSingleProduct } from './fetchSingleProduct.js';





const handleCurrentCart=async(id)=>{

    const product= await fetchSingleProduct(id);

    setProductsToLocalStorage(product[0]);
   
    displayCartItem();

    
}






function setProductsToLocalStorage(product){

    const productsArray=getProductsFormLocalStorage();
    productsArray.push(product);

    localStorage.setItem('products',JSON.stringify(productsArray));

}

function getProductsFormLocalStorage(){

    let productsArray=localStorage.getItem('products');

    if(productsArray){
        return JSON.parse(localStorage.getItem('products')) ;
    }else{
        return [];
    }
    
}


function removeProductFromLocalStorage(id){
    
    let productArray=getProductsFormLocalStorage();

    productArray=productArray.filter((item)=>item.id!==id);

    localStorage.setItem('products',JSON.stringify(productArray));
}




export {handleCurrentCart,getProductsFormLocalStorage,setProductsToLocalStorage,removeProductFromLocalStorage}