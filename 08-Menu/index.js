import { getElement } from './Utils.js';
import menu from './1-basic.js'

const btnContainerDOM=getElement('.btn-container');
const foodsContainerDOM=getElement('.foods-container');


const display=(foods)=>{

    const newFoodContainer=foods.map((food)=>{
       const {id,title,category,price,img,desc}=food;

        return `       <article class="food-container">
                    <img src="${img}" alt="${title}" class="img food-img">

                    <div class="food-info">
                        <h5 class="title">${title}e</h5>
                        <h5 class="price">$${price}</h5>
                        <p class="text">${desc}</p>
                        
                    </div>
                    

                </article>
        
        
        
        `
    }).join(" ");
    
    foodsContainerDOM.innerHTML=newFoodContainer;
    
    
}
const newBtnArray=['all',...new Set(menu.map((food)=>food.category))];

const displayButton=()=>{
  const newBtnContainer=newBtnArray.map((category)=>{
    return ` <button class="category-btn" data-value="${category}">${category}</button>
    `
  }).join(" ");

  btnContainerDOM.innerHTML=newBtnContainer;

 
}

displayButton();

window.addEventListener('DOMContentLoaded',()=>{
    display(menu);
    displayButton();
    
});

const btns=getElement('.category-btn','all');


btnContainerDOM.addEventListener('click',(e)=>{
    const element=e.target;
   if(element.classList.contains('category-btn')){
     const value=element.dataset.value;
     const newMenu=menu.filter((food)=>food.category===value);
     
     if(value==='all'){
        display(menu);
     }else{
        display(newMenu)
     }

   }
})
 







