import {getElement} from '../Utils.js'
import { wiki_Page_url,wiki_API } from "../api.js"

const resultsContainerDOM=getElement('.result-container');
const loadingDOM=getElement('.loading');

const fetchSearchWiki=async(value)=>{

   loadingDOM.style.display='block';

    try {
        const response=await fetch(`${wiki_API}${value}`);

        if(response.status>=200 && response.status<=299 && response.ok){

            let data= await response.json();
            loadingDOM.style.display='none';

            data=data.query.search;

            data=data.map((item)=>{
                const {title,pageid:id,snippet:info}=item;

                return {title,id,info};
            })

            return data;
        }
        else{
            throw new Error('Error due to fetching response');
        }

        
    } catch (error) {
        console.log(error.message);
        loadingDOM.style.display='none';
        
    }




    

}


export {fetchSearchWiki}