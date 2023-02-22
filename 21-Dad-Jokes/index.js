import {getElement} from './Utils.js';
import { randomJoke_API } from './api.js';

const jokeConatinerDOM=getElement('.random-joke-container');
const loadingDOM=getElement('.random-joke-container div')
const jokeDOM=getElement('.joke');
const randomBtbDOM=getElement('.random-btn');




// window.addEventListener('DOMContentLoaded', fetchRandomJoke)
randomBtbDOM.addEventListener('click',fetchRandomJoke)










async function fetchRandomJoke(){


    loadingDOM.classList.add('loading');
    jokeDOM.innerHTML='';

    try {

        const response= await fetch(randomJoke_API,{
            headers:{
                Accept:'application/json',
                'User-Agent':'Learning app',
            }
        });

        if(response.status>=200 && response.status<=299){

            loadingDOM.classList.remove('loading');
            const data= await response.json();
            jokeDOM.textContent=data.joke;
            

        }else{
            throw new Error('There was an error with response')
        }

        
    } catch (error) {
        console.log(error.message);
        jokeConatinerDOM.innerHTML=`<h3>There was an error...</h3>`;
    }

}


fetchRandomJoke();
