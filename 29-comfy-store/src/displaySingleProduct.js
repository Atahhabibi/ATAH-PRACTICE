import { formatPrice } from "../Utils.js";

const displaySingleProducts=(data,container)=>{
    
    if(!data){
        return; 
    }

    let newData=data;

    newData=newData.map((item)=>{;

        const {name,img,price,info,company}=item;
        
        return`
        
           <img src="${img}" class="img single-product-img">

        <div class="single-product-info">

            <h2 class="single-product-heading">${name}</h2>
            <h3 class="single-product-company">By <span>${company}</span></h3>
            <h5 class="single-product-price">${formatPrice(price)}</h5>
            <div class="colors"></div>
            <p class="singe-information">${info}</p>

            <button class="add-to-cart-btn">add to cart</button>

        </div>

           
        `

     }).join(" ");


     container.innerHTML=newData;


}




export{ displaySingleProducts}