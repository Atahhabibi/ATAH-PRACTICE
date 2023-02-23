import { SingleCoktail_API } from "../api.js"
import { getElement } from "../Utils.js"


const LoadingDOM=getElement('.single-loading');
const singleContainer=getElement('.single-center');
const btn2=getElement('.btn-2');


const fetchSingleCocktails=async(id)=>{

    LoadingDOM.style.display='block';
    btn2.style.display='none';

    try {
        const response=await fetch(`${SingleCoktail_API}${id}`);

        if(response.status>=200 && response.status<=299 && response.ok){

            let singleObject=await response.json();
            LoadingDOM.style.display='none';

            if(!singleObject.drinks){
               return [];
            }else{
                return singleObject.drinks;
            }

        }else{
            throw new Error('There was an error due to fetching response');
        }


    } catch (error) {

        console.log(error);
        LoadingDOM.style.display='none';
        singleContainer.innerHTML=`<h4> There was an error</h4>`
        btn2.style.display='block';
        
    }




}


export {fetchSingleCocktails}
