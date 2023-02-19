import { getElement } from "./Utils.js";
import { singleProduct_API } from "./api.js";

const singleContainerDOM=getElement('.single-container');
const sectionCenterDOM=getElement('.section-center');
const laodingContainerDOM=getElement('.loading');


window.addEventListener('DOMContentLoaded',async()=>{
    const URL_paramater=window.location.search;
    const id= new URLSearchParams(URL_paramater).get('id')
    const product= await fetchSingleItem(id);
    singleContainerDOM.innerHTML=displaySingleProduct(product);
    
    
})






const displaySingleProduct=(product)=>{

    const {company,colors,price,name,description:info,image}=product;

    const {thumbnails:{large:{url}}}=image[0];


    return ` <img src="${url}" alt="${name}" class="img single-img">

                <div class="single-container-info">

                    <h2 class="single-title">${name}</h2>
                    <h4 class="single-company">${company}</h4>
                    <h5 class="single-price">${formatPrice(price)}</h5>
                    <div class="single-colors">${
                        colors.map((color)=>{
                            return `<span class="color-picker" style="background:${color};"></span>`
                        }).join(" ")
                    }</div>
    
                    <p class="single-info">${info} </p>
    
                    <button class="cart-btn">add to cart</button>
                    
                </div>
    
    
    `

}



async function fetchSingleItem(id){

    laodingContainerDOM.style.display='block';

    try {

        const response= await fetch(`${singleProduct_API}${id}`);

        if(response.status>=200 && response.status<=299 && response.ok){
            
            const data= await response.json();
            laodingContainerDOM.style.display='none';
            return data.fields;
           
        }else{
            throw new Error('some error due to response')
        }
        
    } catch (error) {
        console.log(error.message);
        laodingContainerDOM.style.display='none';
        sectionCenterDOM.innerHTML=`<h2>There was some error</h2>`
    }
}



const formatPrice=(price)=>{
    const newPrice=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format((price/100).toFixed(2));
    return newPrice;
}