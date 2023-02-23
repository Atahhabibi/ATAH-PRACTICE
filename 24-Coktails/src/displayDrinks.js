import { getElement } from "../Utils.js";
const cocktailsConatainerDOM=getElement('.cocktails-container');

const dispalyDrinks=(data)=>{

    if(!data){
        return; 
    }

    cocktailsConatainerDOM.innerHTML=data.map((drink)=>{

        const {img,name,id}=drink;

        return `<a href="./singleCocktail.html?id=${id}">


                <article class="cocktail">
    
                        <img src="${img}" alt="${name}" class="img cocktail-img">
    
                        <div class="cocktial-name">
                            <h4>${name}</h4>
                        </div>
    
                </article>


            </a>`

        
    }).join(" ");


}




export {dispalyDrinks}