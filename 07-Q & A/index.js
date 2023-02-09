import {getElement } from './Utils.js'

const plusBtnsDOM=getElement('.plus','all');
const answerInfoDOM=getElement('.answer-info','all');
const minuBtnsDOM=getElement('.minus','all');
const questions=getElement('.question','all')


questions.forEach((question)=>{
    question.addEventListener('click',(e)=>{
       const btn=e.target.parentElement;
       const minusTarget=e.target.parentElement.nextElementSibling;
       const answerTargetDOM=e.target.parentElement.parentElement.nextElementSibling;

       if(btn.classList.contains('plus')){

           plusBtnsDOM.forEach((plus)=>{
               if(plus.classList.contains('hide-button')){
                   plus.classList.remove('hide-button');
               }
           })

           minuBtnsDOM.forEach((minus)=>{
               if(minus.classList.contains('show-button')){
                   minus.classList.remove('show-button')
               }
           })

           answerTargetDOM.classList.add('show-answer');
           btn.classList.add('hide-button');
           minusTarget.classList.add('show-button');


           answerInfoDOM.forEach((answer)=>{
               if(answerTargetDOM!==answer){
                   answer.classList.remove('show-answer');
               }
           })
       }
       
      
    })
})



minuBtnsDOM.forEach((minus)=>{
    minus.addEventListener('click',(e)=>{

       const btn=e.target.parentElement;
       const plusTarget=e.target.parentElement.previousElementSibling;
       const answerTargetDOM=e.target.parentElement.parentElement.nextElementSibling;

       if(btn.classList.contains('show-button')){

           btn.classList.remove('show-button');
           plusTarget.classList.remove('hide-button')
           answerTargetDOM.classList.remove('show-answer')
       }

    })
})

