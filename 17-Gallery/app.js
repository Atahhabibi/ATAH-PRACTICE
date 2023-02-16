import {getElement} from './Utils.js'

const sectionCity=getElement('.section-city');
const sectionNature=getElement('.section-nature');

function Gallery(element,name){

  this.count=0;
  this.element=element;
  this.sectionName=name;
  this.photosDOM=element.querySelectorAll('.photo');
  this.overLayDOM=getElement('.overlay');
  this.imageViewerDOM=this.overLayDOM.querySelector('.image-viewer');
  this.slideBtnDOM=this.overLayDOM.querySelector('.slide-btn');
  this.closeBtn=this.overLayDOM.querySelector('.close-btn');


  this.imageContainerDOM=this.overLayDOM.querySelector('.image-container');
  this.sectionImagesDOM=[...element.querySelectorAll('.photo')];

  this.imageContainerDOM.innerHTML=this.sectionImagesDOM.map((img)=>{
    const title=img.getAttribute('alt');
    return ` <img src="${img.src}" alt="${title}" class="img small-img"> `
  }).join("");

 

  this.allSmallImagesDOM=[...this.overLayDOM.querySelectorAll('.small-img')];


  this.longImageDOM=this.overLayDOM.querySelector('.long-img')
  
  this.imageTitleDOM=this.overLayDOM.querySelector('.slide-title');



 this.photosDOM.forEach((photo)=>{
   photo.addEventListener('click',this.showModal.bind(this))
 })

 

 this.closeBtn.addEventListener('click',this.hideModal.bind(this));

 this.imageViewerDOM.addEventListener('click',this.moveSlide.bind(this));

 this.imageContainerDOM.addEventListener('click',this.showSmallImage.bind(this));






}


Gallery.prototype.showModal=function(e){
  this.overLayDOM.classList.add('show-overlay');
  const photoDOM=e.target;
  const title=e.target.getAttribute('alt');
  this.imageTitleDOM.textContent=title;
  this.longImageDOM.src=photoDOM.src;




  this.allSmallImagesDOM.forEach((smallImg)=>{
     
    if(photoDOM.src===smallImg.src){
       smallImg.style.opacity='1';
    }

    this.allSmallImagesDOM.forEach((item)=>{
     if(photoDOM.src!==item.src){
       item.style.opacity='0.4';
     }
    })



  })

}



Gallery.prototype.hideModal=function(){
  this.overLayDOM.classList.remove('show-overlay');
}

Gallery.prototype.moveSlide=function(e){

  const slideBtnDOM=e.target.parentElement;
  
  if(slideBtnDOM.classList.contains('right')){
    this.count++;
    
    if(this.count>this.imageContainerDOM.children.length-1){
      this.count=0;
    }

    if(this.count<0){
      this.count=this.imageContainerDOM.length-1;
    }
    
  }


  if(slideBtnDOM.classList.contains('left')){
    this.count--;
    
    if(this.count<0){
      this.count=this.imageContainerDOM.children.length-1;
    }


  }


  this.longImageDOM.src=this.allSmallImagesDOM[this.count].src;


  this.allSmallImagesDOM.forEach((smallImg)=>{

    if(smallImg.src===this.longImageDOM.src){
      smallImg.style.opacity='1';

      const title=smallImg.getAttribute('alt');
      this.imageTitleDOM.textContent=title;

      this.allSmallImagesDOM.forEach((itemImg)=>{
        if(itemImg!==smallImg){
          itemImg.style.opacity='0.3';
        }
      })
      
    }

  })
}


Gallery.prototype.showSmallImage=function(e){

  const imgDOM=e.target;
  this.longImageDOM.src=imgDOM.src;
  const title=imgDOM.getAttribute('alt');
  this.imageTitleDOM.textContent=title;
  imgDOM.style.opacity='1';

  this.allSmallImagesDOM.forEach((itemImg)=>{
    if(itemImg!==imgDOM){
      itemImg.style.opacity='0.3';
    }else{
      itemImg.style.opacity='1';
    }
  })
  
}



const galleryCity= new Gallery(sectionCity,'city');
const galleryNature= new Gallery(sectionNature,'nature');


