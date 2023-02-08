import { getElement } from "./Utils.js";


const closeBtn=getElement('.close-btn');
const sidebar=getElement('.sidebar');
const toggleBtn=getElement('.toggle-btn');

closeBtn.addEventListener('click',()=>{
    sidebar.classList.add('hide-sidebar')

})


toggleBtn.addEventListener('click',()=>{

    
    if(sidebar.classList.contains('hide-sidebar')){
        sidebar.classList.remove('hide-sidebar')
    }
    
    sidebar.classList.add('show-sidebar')


})

