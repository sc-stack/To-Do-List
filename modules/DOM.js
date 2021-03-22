export default class dom_Manipulator{
    constructor(){
    }


    //creates the actual div with the todo elements inside
    //appends the div to the parent aka "this"
    //expandability will be added later on
    createExpandableDiv(title, description, date, priority){
        const div = document.createElement("div");
        div.classList.add("todo");
        const h1 = document.createElement("h1");
        h1.innerHTML = title;
        const h3 = document.createElement('h3');
        h3.innerHTML = "Due: " + date;
        const h4 = document.createElement('h4');
        h4.innerHTML = "Priority: " + priority;
        const p = document.createElement('p');
        p.innerHTML = description;
        const close = document.createElement("div");
        close.innerHTML = "+";
        close.classList.add('close-todo');
        //closes the div
        close.addEventListener('click', ()=>{
            div.remove();
        });
        const a = document.createElement('a');
        a.setAttribute('href', '#');
        a.innerHTML = "^";
        a.classList.add('expander');
        a.addEventListener('click', () =>{
            div.classList.toggle('expand');
            
        });
        this.appendElements([h1,h3,h4, p, close, a], div);
        document.querySelector("#content-wrap").appendChild(div);
    }

    appendElements(arr, parent){
        //appends an array of elements to a parent element
        for(let i = 0;i < arr.length ; i++){
            parent.appendChild(arr[i]);
        }
    }

    showPriorityState(num){
        //creates 3 divs
        let radioValue = getRadioValue(document.getElementsByName('priority'));
        if(radioValue == "1"){
            //toggle green class on button 1
        }else if(radioValue == "2"){
            //toggle yellow class on button 2
        }else{
            //toggle red class on button 3
        }
    }
    //https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/
    getRadioValue(ele){
        for(let i = 0;i < ele.length; i++){
            if(ele[i].checked){
                return ele[i].value;
            }
        }
        return "";
    }
}
