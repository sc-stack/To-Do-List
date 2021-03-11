import toDo from "/modules/to-do.js";

let t = new toDo('test', 'test ', 'test', 'test');






const close = document.querySelector('.close');

const addButton = document.getElementById('add-btn');

//opens the form

addButton.addEventListener('click', () =>{
    //form popup
    const form = document.querySelector('.form');
    form.style.display = 'flex';
});


//closes the form 

close.addEventListener('click', ()=>{
    const form = document.querySelector('.form');
    form.style.display = "none";
});

//submit button for form
document.querySelector(".submit-button").addEventListener('click', () =>{
    
    let list = new toDo(document.getElementById('title').value, document.getElementById('priority').value, document.getElementById('dueDate'), 'placeholderValue');
    test = list.title;
    cnt++;
    const form = document.querySelector('.form');
    form.style.display = "none";
});
