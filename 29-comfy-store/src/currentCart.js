import { getElement } from '../Utils.js';
import { displayCartItem } from './displayCartItem.js';
import { fetchSingleProduct } from './fetchSingleProduct.js';
import { showTotalAmountMoney } from './toggleCartbar.js';





const handleCurrentCart=async(id)=>{

    const product= await fetchSingleProduct(id);
    let newProduct=product[0];


    const storeArray=getProductsFormLocalStorage();

    if(storeArray.length===0){
        setProductsToLocalStorage(newProduct);
        displayCartItem();
        return; 
    }

   let tempObject=storeArray.find((item)=>item.id===newProduct.id);


   if(tempObject){
       removeProductFromLocalStorage(newProduct.id);
       tempObject.amount++;
       setProductsToLocalStorage(tempObject);
       displayCartItem();

   }else{

     setProductsToLocalStorage(newProduct);
     displayCartItem();

   }
  


   showTotalAmountMoney();

    
   
    
}






function setProductsToLocalStorage(productPara){

    let productsArray=getProductsFormLocalStorage();
    productsArray.unshift(productPara);
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