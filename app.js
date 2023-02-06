const ratingNumbersContainer = document.querySelector('.ratingNumbers-container');
const selection = document.querySelector('span');
const btnSubmit = document.querySelector('.btn');
const cardContainer = document.querySelector('.card-container');
const thankYouCard = document.querySelector('.thank-you-card'); 

//seleccionando el rating:
ratingNumbersContainer.addEventListener('click', e =>{
    if(e.target.id === 'btn1'){
       
        selection.textContent = '1';
       llamarBtnSubmit();

    }else if (e.target.id === 'btn2'){
       
        selection.textContent = '2';
       
        llamarBtnSubmit();
    }else if (e.target.id === 'btn3'){
        
        selection.textContent = '3';
        llamarBtnSubmit();

    }else if (e.target.id === 'btn4'){
        
        selection.textContent = '4';
        llamarBtnSubmit();

    }else if (e.target.id === 'btn5'){
        
        selection.textContent = '5';
        llamarBtnSubmit();
        
    }

    function llamarBtnSubmit(){
        btnSubmit.addEventListener('click', ()=>{
            cardContainer.style.display = 'none';
            thankYouCard.style.visibility = 'visible';
        });
    }

});

