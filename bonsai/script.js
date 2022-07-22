let dropbtns = document.querySelectorAll('.dugme');

dropbtns.forEach(element => {
    element.addEventListener('click', ()=>{
        
        let modal = element.parentElement.nextElementSibling;
        if (modal.style.display === 'none') {
            modal.style.display = 'block';
        }
        else {
            modal.style.display = 'none';
        }
    })
});