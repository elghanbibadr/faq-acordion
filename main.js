const arrow=document.querySelectorAll('.faq__arrow');

arrow.forEach(arrow=>arrow.addEventListener('click',(e)=>{
     
     const answerNextToArrow=e.target.parentElement.nextElementSibling;
     answerNextToArrow.classList.toggle('faq__answers--active');
     e.target.previousElementSibling.classList.toggle('faq__ques-active');
    }))