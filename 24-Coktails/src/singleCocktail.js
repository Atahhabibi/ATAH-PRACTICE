import { dispalyDrink } from "./displayDrink.js";
import { getActulDrinkObject } from "./getActualDrink.js";




window.addEventListener('DOMContentLoaded',async()=>{

    let id=window.location.search;

    const newSearch=new URLSearchParams(id);

    id=newSearch.get('id');

    const drink= await getActulDrinkObject(id)
    dispalyDrink(drink);

    
    

    






    

    
   
    
})


