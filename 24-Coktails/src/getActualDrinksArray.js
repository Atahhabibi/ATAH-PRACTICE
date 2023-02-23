import { fetchCocktails } from "./fetchCoktails.js"


const getActualDrinksArray=async(name="a")=>{
    
    const drinks=await fetchCocktails(name);

    if(!drinks){
        return;
    }
    
 
   let  newDrinksArray=drinks.map((drink)=>{

        const {idDrink:id,strDrink:name,strInstructions:info,strDrinkThumb:img}=drink;

        const ingredients=[
            drink.strIngredient1,
            drink.strIngredient2,
            drink.strIngredient3,
            drink.strIngredient4,
        ];

        return {id,name,info,img,ingredients};
        
    })


    return newDrinksArray;

}



export {getActualDrinksArray};