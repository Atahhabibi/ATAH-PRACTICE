import {getElement} from './Utils.js';
import { fetchRanodmUser } from './fetchUser.js';
import { displayUser } from './displayUser.js';

const randomBtnDOM=getElement('.random-btn');


const showUser=async()=>{
    const userData= await fetchRanodmUser();
    displayUser(userData);
}




window.addEventListener('DOMContentLoaded',showUser)

randomBtnDOM.addEventListener('click',showUser)





