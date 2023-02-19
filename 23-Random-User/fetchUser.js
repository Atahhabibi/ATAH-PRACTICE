import { randomUserSpecificURL } from "./api.js"


export const fetchRanodmUser=async()=>{
    try {
        const response= await fetch(`${randomUserSpecificURL}${getRandomNumber()}`);
        
        if(response.status>=200 && response.status<=299 && response.ok){
            const data=await response.json();
            return data;
        }else{
            throw new Error('There was an error in fetching data')
        }
       
        
    } catch (error) {
        console.log(error.message);
    }

}


export const getRandomNumber=()=>{

    const  number=Math.floor(Math.random()*100);
    return number;
}