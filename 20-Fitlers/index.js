import {getElement} from './Utils.js';
import products from './products.js';

const productsContainerDOM=getElement('.products-container')
const inputDOM=getElement('.product-search-input');
const linkDOM=getElement('.company-link')
const linksContainerDOM=getElement('.company-links');

window.addEventListener('DOMContentLoaded',()=>{

    display(products);
    let newLinksCompany=['all',... new Set(products.map((product)=>product.company))];
    linksContainerDOM.innerHTML=newLinksCompany.map((link)=>{
        return ` <li class="company-link" data-name="${link}"><a href="#">${link}</a></li>`
    }).join(" ");
    

})

inputDOM.addEventListener('keyup',(e)=>{

    e.preventDefault();
    const value=inputDOM.value;

    if(value){

        let ProductsArray=products.filter((product)=>{

            if(product.title.startsWith(value)){
                return product;
            }
        });

        display(ProductsArray)
        
    }else{
        display(products)
    }

})


linksContainerDOM.addEventListener('click',(e)=>{

    e.preventDefault();
    const element=e.target.parentElement;
    const companyName=e.target.parentElement.dataset.name;

    if(element.classList.contains('company-link')){

        if(companyName==='all'){
            display(products);
            return; 
        }
        
        let newProductsArray=products.filter((product)=>product.company===companyName);
         display(newProductsArray)
    

    }



})








function display(products){

    let newProducts=products.map((product)=>{
        const {id,title,company,image:img,price}=product;
        return ` <div class="product">
        <img src="${img}" alt="${title}" class="img product-img">
        <h4 class="prodcut-title">${title}</h4>
        <h5 class="prodcut-price">$${price}</h5>
    </div>`
    }).join(" ");

    productsContainerDOM.innerHTML=newProducts;

}


