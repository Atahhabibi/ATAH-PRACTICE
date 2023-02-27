import { getElement } from "../Utils.js"
import {product_API} from '../api.js'

const loadingDOM=getElement('.loading');
const alertDangerDOM=getElement('.alert-danger');





const fetchProducts=async()=>{

    loadingDOM.style.display='block';

    try {
        const response=await fetch(product_API);

        if(response.status>=200 && response.status<=299 && response.ok){
            loadingDOM.style.display='none';
            let data= await response.json();

            data=getReguiredArray(data)

             return data; 

        }else{
            throw new Error('There was an error due to feching response===check the response');
        }

        
    } catch (error) {
        loadingDOM.style.display='none';
        alertDangerDOM.style.display='block';
        console.log(error.message);
    }
}



function getReguiredArray(data){

 let newData=data;

 newData=newData.map((item)=>{
     const {id,fields}=item;

     const {company,colors,featured,price,name,image}=fields;

     const {thumbnails:{large:{url:img}}}=image[0];

     return {company,colors,featured,price,name,img,id};

 });


 return newData;


}




export{fetchProducts}