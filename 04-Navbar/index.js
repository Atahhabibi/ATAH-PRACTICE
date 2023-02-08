import { getElement } from './Utils.js';

const toggleBtn=getElement('.toggle-btn');
const PagesDOM=getElement('.pages');
const navbarDOM=getElement('.navbar');

toggleBtn.addEventListener('click',()=>{

    const pagesHeight=PagesDOM.getBoundingClientRect().height;
    const nabarHeight=navbarDOM.getBoundingClientRect().height;

   if(pagesHeight>nabarHeight){
       navbarDOM.style.height=`${ pagesHeight + nabarHeight }px`;
       toggleBtn.style.transform="rotate(360deg)"
   }else{
      navbarDOM.style.height=`64px`;
   }


    
})



