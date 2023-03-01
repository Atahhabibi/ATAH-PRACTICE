import { displayProducts } from './src/dipslayProducts.js';
import { fetchProducts } from './src/fetchProducts.js';
import {getElement} from './Utils.js';
import './src/toggleSidebar.js'


const featureContainerDOM=getElement('.feature-container');


window.addEventListener('DOMContentLoaded',async()=>{
   const data=await fetchProducts();
   const featuresItems=data.filter((item)=>item.featured);
   displayProducts(featuresItems,featureContainerDOM);





})

