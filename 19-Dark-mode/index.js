
import {getElement} from './Utils.js';
import { articles } from './data.js';



const ToggleBtnDOM=getElement('.react-btn')
const aricleContainerDOM=getElement('.article-container');




ToggleBtnDOM.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode');

})

window.addEventListener('DOMContentLoaded',()=>{
    let article=articles.map((article)=>{

        const{id,title,date,length,snippet:info}=article;
        
        const newDate=moment(date).format('MMMM Do, YYYY')
        return ` <article class="news">
        <h3 class="news-heading">${title}</h3>
        <span class="news-date"> ${newDate}, ${length} min read</span>
        <p class="news-info">${info}</p>
    </article>`
    }).join(" ");


    aricleContainerDOM.innerHTML=article;
})