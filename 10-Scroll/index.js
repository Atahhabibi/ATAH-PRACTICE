import {getElement} from './Utils.js'

const navBarDOM=getElement('.navbar');
const link_A_DOMs=getElement('.link a','all');
const toggleBtnDOM=getElement('.toggle-btn');
const linksDOM=getElement('.links');
const linksContainerDOM=getElement('.links-container');

const navbarHeight=navBarDOM.getBoundingClientRect().height;
const linksHeight=linksDOM.getBoundingClientRect().height;





window.addEventListener('scroll',()=>{
    if(scrollY>=navbarHeight){
        navBarDOM.classList.add('show-fixed-Navbar');
        linksDOM.classList.add('show');
    }
    
    if(scrollY===0){
        navBarDOM.classList.remove('show-fixed-Navbar')
        linksDOM.classList.remove('show')
    }
})


link_A_DOMs.forEach((link)=>{
    link.addEventListener('click',(e)=>{

        e.preventDefault();
        const id=e.currentTarget.getAttribute('href').slice(1);
        const element=getElement(`#${id}`);
        const navbarHeight=navBarDOM.getBoundingClientRect().height;
        const linksContainerHeight=linksContainerDOM.getBoundingClientRect().height;
        const fixedNav=navBarDOM.classList.contains('show-fixed-Navbar');
        let position=element.offsetTop-navbarHeight;

  
      if(!fixedNav){
          position=position-navbarHeight;
        }

      if(navbarHeight>80){
          position=position+linksContainerHeight;

      }



      window.scrollTo({
          left:0,
          top:position,
      });


      linksContainerDOM.style.height=0;


    })
})


toggleBtnDOM.addEventListener('click',()=>{

    const linksContainerHeight=linksContainerDOM.getBoundingClientRect().height;

    if(linksContainerHeight===0){
        linksContainerDOM.style.height=`${linksHeight}px`;
    }else{
        linksContainerDOM.style.height=0;
    }
})


