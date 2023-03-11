import { getElement } from "../Utils.js"
const githubContainer=getElement('.github-container');


const displayFollowers=(data)=>{

    if(!data){
        return; 
    }

    let follower=data.map((item)=>{

        const{img,name,profileURL}=item;

        return ` <article class="github-profile">

        <img src="${img}" class="img github-photo">

        <h5 class="github-name">${name}</h5>

        <button class="github-btn"><a href="${profileURL}">view profile</a></button>

    </article> `
    }).join(" ");


    githubContainer.innerHTML=follower;


}

export {displayFollowers}