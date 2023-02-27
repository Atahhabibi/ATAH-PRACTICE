
const displayProducts=(data,container)=>{
    
    if(!data){
        return; 
    }

    let newData=data;

    newData=newData.map((item)=>{

        const {name,id,img,price}=item;
        
        return`

            <article class="product">
                
                <div class="icon-container">

                    <a href="./pages/product.html?id=${id}"><button class="search-icon"><i class="fa-solid fa-magnifying-glass"></i></button></a>
                    <button class="cart-icon"><i class="fa-solid fa-cart-shopping"></i></button>

                </div>


                <img src="${img}" alt="product" class="img product-img">

                <div class="product-info">
                    <h5 class="product-heading">${name}</h5>
                    <h5 class="product-price">$${price}</h5>
                </div>

            </article>

        `

     }).join(" ");


     container.innerHTML=newData;


}


export{ displayProducts}