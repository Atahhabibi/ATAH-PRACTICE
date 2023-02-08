import { getElement } from './Utils.js';

const toggleBtn=getElement('.toggle-btn');
const PagesDOM=getElement('.pages');
const navbarDOM=getElement('.navbar');

toggleBtn.addEventListener('click',()=>{

    console.log(toggleBtn);

    const pagesHeight=PagesDOM.getBoundingClientRect().height;
    const nabarHeight=navbarDOM.getBoundingClientRect().height;

   if(pagesHeight>nabarHeight){
       navbarDOM.style.height=`${ pagesHeight + nabarHeight }px`;
   }else{
      navbarDOM.style.height=`64px`;
   }


    
})



