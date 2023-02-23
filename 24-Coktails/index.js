import { getElement } from './Utils.js';
import { getActualDrinksArray } from './src/getActualDrinksArray.js';
import { dispalyDrinks } from './src/displayDrinks.js';

const searchInputDOM=getElement('.cocktail-input');

const showDrink=async(name)=>{
    const drinks=await getActualDrinksArray(name);
    dispalyDrinks(drinks);
}




window.addEventListener("DOMContentLoaded",()=>{
    showDrink();
})


searchInputDOM.addEventListener('keyup',async()=>{

    const value=searchInputDOM.value;

    if(value==="")showDrink();
    else showDrink(value)

})









