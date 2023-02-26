import { getElement } from "../Utils.js";

const resultContainer=getElement('.result-container');


const displayResults=(data)=>{

    if(!data){
        return; 
    }

    const newData=data.map((item)=>{
        const {id,info,title}=item;

        return ` <a target="_blank href="" class="result-link" data-id="${id} ">

        <article class="result">
            <h2 class="info-heading">${title}</h2>
            <p class="info">${info}</p>
        </article>
        
    </a>
    `

    }).join(" ")


    resultContainer.innerHTML=newData;


}


export {displayResults}