import dom_Manipulator from "/modules/DOM.js";
import toDo from "/modules/to-do.js";


let dom = new dom_Manipulator(document.querySelector('.to-dos'));

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
    let list = new toDo(document.getElementById('title').value, document.getElementById('description').value, document.getElementById('dueDate').value, document.getElementById('priority').value);
    const trDOM = new dom_Manipulator(document.createElement('tr'));
    let tds = dom.createElements('td', 4);
    let text = list.getInArr();
    for(let i = 0;i < tds.length; i++){
        tds[i].innerHTML = text[i];
    }
    trDOM.appendElements(tds);
    dom.appendElements([trDOM.parent]);
    console.log(dom.parent);
    const form = document.querySelector('.form');
    form.style.display = "none";
});
