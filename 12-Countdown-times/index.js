import { getElement,getDayName,getMonthName } from './Utils.js';

const dateDOM=getElement('.date');
const timeContainerDOM=getElement('.time-container')


const countTime=getElement('.count-time','all')

const newDate= new Date();

const expireDate = new Date('2023',`${newDate.getMonth()}`,`${newDate.getDate()+10}`,'13','24','34');



const getRemainingTime=()=>{
const todayDate=new Date();

const getFututreDate=expireDate.getDate();
const getFutureYear=expireDate.getFullYear();
const getFutureMonth=getMonthName(expireDate.getMonth());
const getFutureDay=getDayName(expireDate.getDay());
const getfutureMinutes=expireDate.getMinutes();
const getfuturehour=expireDate.getHours();


dateDOM.innerHTML=`<h5 class="date">giveaway ends on ${getFutureDay}, ${getFututreDate} ${getFutureMonth} ${getFutureYear} ${getfuturehour}:${getfutureMinutes}${getfuturehour>=12?'pm':'am'}</h5>`

const timeDifference=expireDate.getTime()-todayDate.getTime();


// 1sec=1000 ms
// 1min=60 sec
// 1hour=60 min
// 1day=24hours


const oneDay=24*60*60*1000;
const onehour=60*60*1000;
const oneMin=60*1000;
const oneSec=1000;


const daysLeft=Math.floor(timeDifference/oneDay);
const hoursLeft=Math.floor((timeDifference%oneDay)/onehour)
const minutesLeft=Math.floor((timeDifference%onehour)/oneMin);
const secondLeft=Math.floor((timeDifference%oneMin)/oneSec);

const value=[daysLeft,hoursLeft,minutesLeft,secondLeft];


countTime.forEach((item,index)=>{
    item.innerHTML=value[index]
})


if(timeDifference<0){

     clearInterval(countDown);

     timeContainerDOM.innerHTML='<h4 > sorry ,this giveaway has expired </h4>'
    
    
}


}

let countDown=setInterval(getRemainingTime,1000);























