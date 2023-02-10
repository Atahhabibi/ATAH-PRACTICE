import {getElement} from './Utils.js'

const switchBtnDOM=getElement('.switch-container button');
const switchDOM=getElement('.switch');
const video=getElement('video')
const preLoader=getElement('.pre-loader');



switchBtnDOM.addEventListener('click',(e)=>{
    
    const element=e.target;
 
    if(element.classList.contains('pause')){
        switchDOM.classList.add('stop-it');
        video.pause();
    }
    
    if(element.classList.contains('play')){
        switchDOM.classList.remove('stop-it')
        video.play();
    }


})


switchDOM.addEventListener('click',()=>{

    if(switchDOM.classList.contains('stop-it')){
        switchDOM.classList.remove('stop-it');
        video.play();
        return ;
    }

    switchDOM.classList.add('stop-it');
    video.pause();
    

    
})


window.addEventListener('load',()=>{
   preLoader.classList.add('hide-preloader');
})