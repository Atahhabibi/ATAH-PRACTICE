
import { fetchFollwers } from './src/fetchFollowers.js';
import { displayFollowers } from './src/displayFlowers.js';
import { paginate } from './src/paginate.js';
import { displayButtons } from './src/displayButton.js';




window.addEventListener('DOMContentLoaded',async()=>{
    const followers= await fetchFollwers();
    const eachPageFollower=paginate(followers);
    displayButtons(eachPageFollower);
   
})





