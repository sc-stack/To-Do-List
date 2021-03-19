import dom_Manipulator from "/modules/DOM.js";
import toDo from "/modules/to-do.js";

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
//appends the stuff on the todo to the dom
document.querySelector(".submit-button").addEventListener('click', () =>{
    let list = new toDo(document.getElementById('title').value, document.getElementById('description').value, document.getElementById('dueDate').value, document.getElementById('priority').value);
    const divAdder = new dom_Manipulator('content-wrap');
    divAdder.createExpandableDiv(list.title, list.description);
    const form = document.querySelector('.form');
    form.style.display = "none";
});

