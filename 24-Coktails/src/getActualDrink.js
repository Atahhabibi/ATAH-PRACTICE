import { fetchSingleCocktails } from "./fetchSingleCocktails.js"


const getActulDrinkObject=async(valueID)=>{

    let drink= await fetchSingleCocktails(valueID)

    if(!drink){
        return;
    }
    
      drink=drink.map((drink)=>{

        const {idDrink:id,strDrink:name,strInstructions:info,strDrinkThumb:img}=drink;

        const ingredients=[
            drink.strIngredient1,
            drink.strIngredient2,
            drink.strIngredient3,
            drink.strIngredient4,
        ];

        return {id,name,info,img,ingredients};
        
    })


    return drink[0];

}


export {getActulDrinkObject}