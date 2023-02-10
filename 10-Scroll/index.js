import {getElement} from './Utils.js'

const navBarDOM=getElement('.navbar');
const link_A_DOMs=getElement('.link a','all');
const toggleBtnDOM=getElement('.toggle-btn');
const linksDOM=getElement('.links');


const navbarHeight=navBarDOM.getBoundingClientRect().height;
const linksHeight=linksDOM.getBoundingClientRect().height;
const newNavbarHeight=navbarHeight+linksHeight;
console.log(linksHeight);


window.addEventListener('scroll',()=>{
    if(scrollY<=navbarHeight){
      navBarDOM.classList.add('show-fixed-Navbar');

      link_A_DOMs.forEach(element => {
          element.style.color="black";
      });
    }

    if(scrollY===0){
        navBarDOM.classList.remove('show-fixed-Navbar')
    }
})


toggleBtnDOM.addEventListener('click',()=>{
    console.log(toggleBtnDOM);
 
    navBarDOM.style.height=`auto`

})