
const getDrinks=(name)=>{

    let drinks=localStorage.getItem(name);

    if(drinks){
        drinks=JSON.parse(localStorage.getItem(name));
    }else{
        drinks=[];
    }

    return drinks;

}


const setDrinks=(name,value)=>{
    localStorage.setItem(name,JSON.stringify(value));
}


export {setDrinks,getDrinks}