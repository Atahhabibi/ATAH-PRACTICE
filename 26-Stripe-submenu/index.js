import {getElement} from './Utils.js';
import sublinks from './data.js';

const toggleBtnDOM=getElement('.toggle-btn');
const bigOverlayDOM=getElement('.overlay');
const closeBtnDOM=getElement('.close-btn');
const linksContainerDOM=getElement('.links-container');
const linksBtn=getElement('.links');
const  smallOverlay=getElement('.small-overlay');
const navbarDOM=getElement('.navbar');



toggleBtnDOM.addEventListener('click',()=>{
    bigOverlayDOM.classList.add('show-overlay');
})
closeBtnDOM.addEventListener('click',()=>{
    bigOverlayDOM.classList.remove('show-overlay');
})


linksBtn.innerHTML=sublinks.map((item)=>{
    const {page}=item;
    return`<button class="category-btn" data-value="${page}">${page}</button>
    `
}).join(" ");


const allBtnCategoryDOM=getElement('.category-btn','all');






const elements=createSublinks(sublinks);


linksContainerDOM.innerHTML=elements;





linksBtn.addEventListener('mouseover',(e)=>{

    const element=e.target;

    if(element.classList.contains('category-btn')){

        smallOverlay.style.display='block';

        const btnLocationLeft=element.getBoundingClientRect().left;
        const btnLocationRight=element.getBoundingClientRect().right;
        const btnCenter=(btnLocationLeft+btnLocationRight)/2;

        smallOverlay.style.left=`${btnCenter}px`

        


        const value=element.dataset.value;
        
        let newSublink=sublinks.filter((link)=>link.page===value);

        const copySublinks=[...newSublink];
     
        newSublink=createSublinks(newSublink);
        
        smallOverlay.innerHTML=newSublink;

        const smallOverlayLinksDOM=smallOverlay.querySelector('.small-overlay-links');


        copySublinks.forEach((item)=>{
            const {links}=item;

            if(links.length>3){
                smallOverlayLinksDOM.style.gridTemplateColumns='1fr 1fr 1fr 1fr';
            }

            else if(links.length===3){
                smallOverlayLinksDOM.style.gridTemplateColumns='1fr 1fr 1fr ';
            }

        
        })


     
        

        

        smallOverlay.addEventListener('mouseleave',(e)=>{

            const element=e.target;
            if(element.classList.contains('small-overlay')){
                smallOverlay.style.display='none';
            }
        })


    }


    




 

 

    
})










function createSublinks(item){

    const elements=item.map((item)=>{
        const {page,links}=item;
    
        return `  
        
        <article class="single-category small-category">
     
        <h5 class="category-heading small-heading">${page}</h5>
    
    
        <ul class="overlay-links small-overlay-links">
    
        ${
           links.map((link)=>{
               const {label,icon,url}=link;
               return `  
               <button class="link "> <a href="./${url}"><i class="${icon}"></i>${label}</a></button>
               `
           }).join(" ")
        }
    
        </ul>
    
        </article>
        
        
        `;
    
    }).join(' ');

    return elements;

}