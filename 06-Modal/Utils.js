
const getElement=(selection,all)=>{

    let element;

    if(all && selection){
       element=[...document.querySelectorAll(selection)];
       
       if(element.length===0)throw new Error(`Did not select right selection:=>${selection} `)
       else return element;
       
    }

    else if(selection){

        element=document.querySelector(selection);

        if(element) return element
        else throw new Error(`Did not select right selection::=>${selection} `);
        
    }


}


//Format price 

const formatPrice = (price) => {

    let formattedPrice=new Intl.NumberFormat('en-US',
    {
      style:"currency",
      currency:"USD",
    }).format((price/100).toFixed(2))
  
    return formattedPrice;
  
  }

// Local storage 
  
const getStorageItem = (name) => {

    let storageItem=localStorage.getItem(name);
    if(storageItem){
      storageItem=JSON.parse(localStorage.getItem(name))
    }else{
      storageItem=[]
    }
    return storageItem;
  }
  

const setStorageItem = (name,item) => {
   localStorage.setItem(name,JSON.stringify(item))
  }





export {getElement,getStorageItem,setStorageItem,formatPrice}