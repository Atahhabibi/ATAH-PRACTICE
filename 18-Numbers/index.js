import {getElement} from './Utils.js'

const countDOMs=getElement('.count','all');



window.addEventListener('DOMContentLoaded',()=>{
    countDOMs.forEach((item)=>{

        if(item.classList.contains('projects')){

           const increment=Math.ceil(500/1000);

           updateCount(500,item,increment)
           
        }

        if(item.classList.contains('working')){
           const increment=Math.ceil(17000/1000);
           updateCount(17000,item,increment)
        }

        if(item.classList.contains('clients')){
            const increment=Math.ceil(1500/1000);
            updateCount(1500,item,increment)
        }
    
        
       
    })


})


const updateCount=(amount,item,increment)=>{

    let count=0;
    const timeout=setInterval(() => {
        count+=increment;
        
        if(count>amount){
            clearInterval(timeout)
        }else{
            item.textContent=`${count}+`
        }

    },1);

}





