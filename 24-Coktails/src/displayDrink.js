import { getElement } from "../Utils.js";

const singleContainer=getElement('.single-center');




const dispalyDrink=(drinkObject)=>{

    if(!drinkObject){
        return;
    }


    const {img,info,ingredients,name}=drinkObject;

    singleContainer.innerHTML=` <img src="${img}" alt="${name}" class="img single-img">

             <div class="single-info-container">

                <h2 class="single-heading">${name}</h2>
                <p class="single-info">${info}</p>
                
                <ul class="single-ingredients-container">
                ${ingredients.map((item)=>{
                    return `<li class="single-ingredient"><i class="fa-regular fa-square-check"></i>${item}</li>`
                }).join(" ")}
                   
                </ul>

                <button class="single-coktail-btn"><a href="../index.html">all cocktails</a></button>
                
            </div>
    
    
    
    
    `

}




export {dispalyDrink}