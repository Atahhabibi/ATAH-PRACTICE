
const paginate=(data)=>{

    const numberOfPages=9;
    const perPage=Math.floor((data.length/numberOfPages));

 

    const newArray=Array.from({length:perPage},(item,index)=>{

        let start=numberOfPages*index;

        let sampleArray=data.slice(start,start + numberOfPages);
     
        return sampleArray;
       
    })


   return newArray;

}


export {paginate}

