import {getElement} from './Utils.js'

const firstCounterDOM=getElement('.first');
const SecondCounterDOM=getElement('.second');



function Counter(element,value){

    this.counterDOM=element;
    this.value=value;
    this.resetBtnDOM=element.querySelector('.reset');
    this.increaseBtnDOM=element.querySelector('.increase');
    this.decreaseBtnDOM=element.querySelector('.decrease');
    this.countDOM=element.querySelector('.count');

    // binding

    this.increase=this.increase.bind(this);
    this.decrease=this.decrease.bind(this);
    this.reset=this.reset.bind(this);

  
    
    this.increaseBtnDOM.addEventListener('click',this.increase)
    this.decreaseBtnDOM.addEventListener('click',this.decrease)
    this.resetBtnDOM.addEventListener('click',this.reset)

}

Counter.prototype.increase=function(){
    this.value++;
    this.countDOM.textContent=this.value;
}

Counter.prototype.decrease=function(){
    this.value--;
    this.countDOM.textContent=this.value;
}

Counter.prototype.reset=function(){
    this.value=0;
    this.countDOM.textContent=this.value;
}



const firstCounter=new Counter(firstCounterDOM,0)
const secondCounter=new Counter(SecondCounterDOM,0)
