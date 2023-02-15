import { getElement } from './Utils.js';

const inputDOM=getElement('#grocery-input');
const submitBtnDOM=getElement('.submit-btn');
const groceryContainerDOM=getElement('.grocery-container');
const hightLightDOM=getElement('.highlight');
const clearBtnDOM=getElement('.clear-btn');




let editFlag=false;
let articleId;


submitBtnDOM.addEventListener('click',(e)=>{
    e.preventDefault();
    const value=inputDOM.value;
    
    if(!editFlag){
        
        if(value){
            
            submitBtnDOM.textContent='submit';
            const id=new Date().getTime();
            createItem(value,id)
            showHighLight('success','Item added to the cart')
            storeItemstoStorage(id,value)
            inputDOM.value='';

        }else{
            showHighLight('warning','please enter value')
        }


   }

   if(editFlag){

      const value=inputDOM.value;

      if(value){

          editItem(articleId,value)

          EditItemFromStorage(articleId,value);
          showHighLight('success','Item editted')
          editFlag=false;
          submitBtnDOM.textContent='submit';
          inputDOM.value='';

       
      }else{

        showHighLight('warning','please enter value')
      }



   }



       if(groceryContainerDOM.children.length>0){
              
              clearBtnDOM.style.visibility="visible";

            }

        if(groceryContainerDOM.children.length===0){

             clearBtnDOM.style.visibility="hidden";
             submitBtnDOM.textContent='submit';
             editFlag=false;

        }
   


   
})




groceryContainerDOM.addEventListener('click',(e)=>{

   const element=e.target.parentElement;


   if(element.classList.contains('edit-btn')){

    const item=e.target.parentElement.parentElement.parentElement;
    const id=item.getAttribute('id');
  
    submitBtnDOM.textContent='edit';

    inputDOM.value=item.firstElementChild.textContent;

    editFlag=true;

    articleId=id;
   

   }



   if(element.classList.contains('trash-btn')){

     const item=e.target.parentElement.parentElement.parentElement;
     const id=item.getAttribute('id');
     removeItemFormStorage(id)
    
 
     groceryContainerDOM.removeChild(item);
     showHighLight('warning','Item remove from the list');

     
       if(groceryContainerDOM.children.length>0){
              
              clearBtnDOM.style.visibility="visible";

            }

        if(groceryContainerDOM.children.length===0){
               
             clearBtnDOM.style.visibility="hidden";
             submitBtnDOM.textContent='submit';
             editFlag=false;
        }



   }

  

})





function editItem(id,value){

    const newArticle=document.getElementById(`${id}`);

    newArticle.firstElementChild.textContent=value;



}






function createItem(name,id){

    const newArticle=document.createElement('article');
    newArticle.setAttribute('id',id);
    newArticle.setAttribute('class','item')

    newArticle.innerHTML=`

                 <p class="item-name">${name}</p>
                    <div class="icon-container">
                        <button class="edit-btn"><i class="fas fa-edit"></i></button>
                        <button class="trash-btn"><i class="fas fa-trash"></i></button>
                    </div>
    
    `


    groceryContainerDOM.appendChild(newArticle);
    
    
}



function showHighLight(sign,text){

    if(sign==="success"){
        hightLightDOM.style.background="#d1e7dd";
        hightLightDOM.textContent=text;
    }

    if(sign==="warning"){
        hightLightDOM.style.background="#f8d7da";
        hightLightDOM.textContent=text;
    }

    setTimeout(() => {
        hightLightDOM.style.background="transparent";
        hightLightDOM.textContent='';
     },2000);



}



clearBtnDOM.addEventListener('click',()=>{
    groceryContainerDOM.innerHTML="";
    localStorage.setItem('store',[])
    showHighLight('warning','All item removed from the list')
    clearBtnDOM.style.visibility='hidden';
})


function getItemsArrayFromStorage(){

    let item=localStorage.getItem('store');

    if(item){
        item=JSON.parse(item);

    }else{
        item=[];
    }

    return item;

    
}




function storeItemstoStorage(id,value){

    let array=getItemsArrayFromStorage();

    let item={id,value};

    array.push(item);

    localStorage.setItem('store',JSON.stringify(array));


}



function EditItemFromStorage(id,value){

    const tempID=parseInt(id);

    let array=getItemsArrayFromStorage();

    array=array.map((item)=>{

       if(item.id===tempID){
        return {id:tempID,value:value}
       }

       return item;


    })


    localStorage.setItem('store',JSON.stringify(array))


}





function removeItemFormStorage(id){

    const tempID=parseInt(id);

    let array=getItemsArrayFromStorage();

    array=array.filter((item)=>item.id!==tempID);

    localStorage.setItem('store',JSON.stringify(array));


}














window.addEventListener('DOMContentLoaded',()=>{

    const store=getItemsArrayFromStorage();

    if(store.length>0){

    clearBtnDOM.style.visibility='visible'

    store.map((item)=>{

        const{id,value}=item;

        createItem(value,id);

    })

    }else{
        clearBtnDOM.style.visibility='hidden';
        return;
    }
    


})