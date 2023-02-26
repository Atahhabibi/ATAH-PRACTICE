import { displayResults } from './src/displayResults.js';
import { fetchSearchWiki } from './src/fetchSearchWiki.js';
import {getElement} from './Utils.js'
import { wiki_Page_url } from './api.js';

const wikiBtnDOM=getElement('.btn-wiki');
const inputDOM=getElement('.input-wiki');
const formDOM=getElement('.wiki-form');
const empyValueDom=getElement('.empty-value');



formDOM.addEventListener('submit',async(e)=>{


    
    e.preventDefault();

    const value=inputDOM.value;

    if(!value){
        empyValueDom.style.display='block';
        return; 
    }

    const data =await fetchSearchWiki(value);
    displayResults(data);

    const singleResultDOMs=getElement('.result-link','all');

    singleResultDOMs.forEach((result)=>{

        result.addEventListener('click',()=>{
            const value=result.dataset.id;
            window.open(`${wiki_Page_url}${value}`,'_blank');
           
        })
    })

  


})







