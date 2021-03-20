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
    let DOM = new dom_Manipulator();
    let list = new toDo(document.getElementById('title').value, document.getElementById('description').value, document.getElementById('dueDate').value, DOM.getRadioValue(document.getElementsByClassName("priority")));
    DOM.createExpandableDiv(list.title, list.description, list.dueDate, list.priority);
    const form = document.querySelector('.form');
    form.style.display = "none";
});

