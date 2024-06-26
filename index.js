const btn = document.querySelectorAll(`.questions`);


btn.forEach((questionAddEventListener)=>{

   questionAddEventListener.addEventListener(`click`,(event)=>{

    const selectedQ = event.target.parentElement.id;
    const selectedA = document.querySelector(`.answer-${selectedQ}`);
    console.log(selectedA);

    selectedA.classList.toggle(`open`);

   })
})