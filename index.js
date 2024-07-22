
// making btn
const q = document.querySelectorAll(`.question`);

// making As to toggle
const a = document.querySelectorAll(`.answer`);

// As into btns
a.forEach((btn)=>{
    btn.addEventListener(`click`, answerToggle);
})

function answerToggle(e){
    e.preventDefault();
    const clickedA = e.target;
    // const swapping = clickedA.parentElement;

    // console.log(swapping);
    
    if(clickedA){
        clickedA.classList.toggle(`collapse`);
        const clickedAChangeIcon = clickedA.parentElement.firstElementChild.firstElementChild;
        console.log(clickedAChangeIcon)

        if (clickedAChangeIcon.src.includes(`/images/icon-plus.svg`)){
            clickedAChangeIcon.src = `./assets/images/icon-minus.svg`;
        }else{
            clickedAChangeIcon.src = `./assets/images/icon-plus.svg `;
        }

    }
}



// Qs into btns
q.forEach((btn)=>{
    btn.addEventListener(`click`, togggle);
})

function togggle(e){
    e.preventDefault();
    
    const clickedQ = e.target;
    
    
    if(clickedQ){
        const nexElement  = clickedQ.nextElementSibling;
        
        nexElement.classList.toggle(`collapse`);

        const qIcon = clickedQ.querySelector(`img`);
        if (qIcon.src.includes(`/images/icon-plus.svg`)){
            qIcon.src = `./assets/images/icon-minus.svg`;
            
        }else{
            qIcon.src = `./assets/images/icon-plus.svg`;
        }

        // console.log(qIcon);
    }
}










