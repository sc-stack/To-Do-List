import dom_Manipulator from "/modules/DOM.js";
import toDo from "/modules/to-do.js";
import Project from "/modules/projects.js";

const close = document.querySelector('.close');
let currentProject = new Project([], 'Default Project');
let DOM = new dom_Manipulator();
DOM.appendDropable(currentProject.name, currentProject);
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
    let list = new toDo(document.getElementById('title').value, document.getElementById('description').value, document.getElementById('dueDate').value, DOM.getRadioValue(document.getElementsByClassName("priority")));
    currentProject.add(list);
    DOM.createExpandableDiv(list.title, list.description, list.dueDate, list.priority);
    const form = document.querySelector('.form');
    form.style.display = "none";
});

//adds a new project

document.getElementById('add-projects').addEventListener('click', () =>{
    //adds a new project
    //create an input field
    const form = document.querySelector('.project-form');
    form.style.display = "flex";
});

//closes the project form 

document.querySelector('.project-close-button').addEventListener('click', () =>{
    document.querySelector('.project-form').style.display = "none";
});

//submit button for project form
document.querySelector('.submit-project-button').addEventListener('click', ()=>{
    currentProject = new Project([], document.querySelector("#project-name").value);
    DOM.appendDropable(currentProject.name, currentProject);
    document.querySelector('.project-form').style.display = "none";
});

