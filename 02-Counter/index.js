const btnContaier=document.querySelector(".btn-container");
const counterDOM=document.querySelector('.counter');

let counter=0;

btnContaier.addEventListener('click',(e)=>{

    const btn=e.target;

   if(btn.classList.contains('decrease')){
    counter--;
    if(counter===0){
        counterDOM.style.color='black'
    }

    if(counter<0){
        counterDOM.style.color='red';
    }
    counterDOM.textContent=counter;
       
   }

   if(btn.classList.contains('reset')){
    counter=0;
    if(counter===0){
        counterDOM.style.color='black'
    }
    counterDOM.textContent=counter;
    
   }

   if(btn.classList.contains('increase')){
     counter++;
     if(counter===0){
        counterDOM.style.color='black'
    }
     if(counter>0){
         counterDOM.style.color='green';
     }
     counterDOM.textContent=counter;
   }
   
})


