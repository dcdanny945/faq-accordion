const btn = document.querySelectorAll(`.questions`);


btn.forEach((makingBtn)=>{
   makingBtn.addEventListener(`click`, (e)=>{
      toggle(e)
   })
})


function toggle(e){

 const clickedElement = e.target;
 const selectedQ = clickedElement.parentElement.id;
 const selectedA = document.querySelector(`.answer-${selectedQ}`);

 selectedA.classList.toggle(`open`);

   const nextElement = clickedElement.nextElementSibling;
   
   const currentSrc = nextElement.src;   


      if(currentSrc.includes(`icon-minus.svg`)){     
         nextElement.src = `./assets/images/icon-plus.svg`;
      } else if(currentSrc.includes(`icon-plus.svg`)){  
         nextElement.src = `./assets/images/icon-minus.svg`;
      }
      
   
}


