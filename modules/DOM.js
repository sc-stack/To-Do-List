export default class dom_Manipulator{
    constructor(parent){
        this.parent = parent;
    }

    get parent(){
        return this._parent;
    }

    set parent(parent){
        if(parent){
            this._parent = parent;
         }
    }
    //creates the actual div with the todo elements inside
    //appends the div to the parent aka "this"
    //date and priority will be added later on
    createExpandableDiv(title, description){
        const div = document.createElement('div');
        div.id = "wrapper";
        const h1 = document.createElement("h1");
        h1.innerHTML = title;
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.id = "toggle";
        const label = document.createElement('label');
        label.setAttribute('for', 'toggle');
        const innerDiv = document.createElement('div');
        innerDiv.id = "expand";
        const p = document.createElement('p');
        p.innerHTML = description;
        innerDiv.appendChild(p);
        this.appendElements([div, h1, checkbox, label, innerDiv], document.querySelector('#content-wrap'));
        console.log('fuck');
    }

    appendElements(arr, parent){
        //appends an array of elements to a parent element
        for(let i = 0;i < arr.length ; i++){
            parent.appendChild(arr[i]);
        }
    }

    getPriorityColor(num){
        //gets the color to display based off current priority
        if(num === 1){
            return "Green";
        }else if(num == 2){
            return "Yellow";
        }else{
            return "Red";
        }

    }

    showPriorityState(num){
        //creates 3 divs
        if(this.getPriorityColor(num) === "Green"){
            //toggle green class on button 1
        }else if(this.getPriorityColor(num) == "Yellow"){
            //toggle yellow class on button 2
        }else{
            //toggle red class on button 3
        }
    }
}
