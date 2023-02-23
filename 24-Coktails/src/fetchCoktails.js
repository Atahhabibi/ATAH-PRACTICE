import { getElement } from "../Utils.js";
import { Cocktails_API } from "../api.js";
import { getDrinks,setDrinks } from "./locakStorage.js";

const loadingDOM=getElement('.cocktails-loading');
const cocktailsConatainerDOM=getElement('.cocktails-container');

const fetchCocktails=async(name="a")=>{


    let drinksArray=getDrinks(name);

  
    if(drinksArray.length>0){
       return drinksArray;
    }


    loadingDOM.style.display='block';

    try {
        const response=await fetch(`${Cocktails_API}${name}`);
        
        if(response.status>=200 && response.status<=299 && response.ok){

            loadingDOM.style.display='none';
            const data= await response.json();

             drinksArray=data.drinks;


            if(!drinksArray){

               cocktailsConatainerDOM.innerHTML='<h3>No cocktail match your search</h3>';
               loadingDOM.style.display='none';
               return; 
            }

            console.log(drinksArray);

            setDrinks(name,drinksArray);

        
            return drinksArray;



        }else{
          throw new Error('There was an Error due to fetching response')
        }

        
    } catch (error) {
        console.log(error.message);
        cocktailsConatainerDOM.innerHTML='<h3>There was an error</h3>';
        loadingDOM.style.display='none';
        
    }


}




export {fetchCocktails};

