//import {form} from "/modules/form.js";


const close = document.querySelector('.close');

const addButton = document.getElementById('add-btn');

//opens the form

addButton.addEventListener('click', () =>{
    //form popup
    const form = document.querySelector('.form');
    form.style.display = 'flex';
    console.log('clicked');
});


//closes the form 

close.addEventListener('click', ()=>{
    const form = document.querySelector('.form');
    form.style.display = "none";
    console.log('clicked2');
});

//let form = new form();

//form.createForm();