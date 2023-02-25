import { getElement } from "../Utils.js"
import { github_API } from "../api.js"

const loadingDOM=getElement('.loading');
const githubContainer=getElement('.github-container');





const fetchFollwers=async()=>{

    loadingDOM.style.display='block';

    try {
        const response=await fetch(github_API);
     

        if(response.status>=200 && response.status<=299 && response.ok){
            loadingDOM.style.display='none';
            let data= await response.json();

            data=data.map((item)=>{
                const {login:name,avatar_url:img,html_url:profileURL}=item;
                return {name,img,profileURL};
            })

            return data;
        
        }
        else{
            throw new Error('Eror due to fetching response');

        }


        
    } catch (error) {
        console.log(error.message);
        githubContainer.innerHTML=`<h3>There was an error</h3>`;
        loadingDOM.style.display='none';

    }


}


export{fetchFollwers}