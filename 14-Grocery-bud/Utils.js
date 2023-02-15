
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



const months= [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"

];


const  Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



const getMonthName=(index)=>{

  if(index>=0 && index<=months.length-1){
    return months[index]
  }else{
    throw new Error('Wrong index number for months array')
  }
  
  
}

const getDayName=(index)=>{

  if(index>=0 && index<=Days.length-1){
    return Days[index]
  }else{
    throw new Error('Wrong index number for days array')
  }
  
  
}









export {getElement,getStorageItem,setStorageItem,formatPrice,getDayName,getMonthName}