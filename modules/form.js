import { EvalDevToolModulePlugin } from "webpack";

class Form{
    //key value pairs so title: example title, 
    constructor(title, description, dueDate, priority){
        this.title = title.title;
        this.description = description.description;
        this.dueDate = dueDate.dueDate;
        this.priority = priority.priority;
    }

    createForm(){
        //practicing my DOM manipulation with setting the forn up
        const form = document.createElement('form');
        const ul = document.createElement('ul');
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        const li3 = document.createElement('li');
        const li4 = document.createElement('li');
        const label1 = document.createElement('label');
        const label2 = document.createElement('label');
        const label3 = document.createElement('label');
        const label4 = document.createElement('label');
        const input1 = document.createElement('input');
        const textArea2 = document.createElement('textarea');
        const input3 = document.createElement('input');
        const input4 = document.createElement('input');
        input1.setAttribute('type', 'text');
        input1.setAttribute('id', 'title');
        input1.setAttribute('name', 'title');
        textArea2.setAttribute('id', 'description');
        textArea2.setAttribute('name', 'description');
        input3.setAttribute('type', 'text');
        input3.setAttribute('id', 'dueDate');
        input3.setAttribute('name', 'dueDate');
        input4.setAttribute('type', 'text');
        input4.setAttribute('id', 'priority');
        input4.setAttribute('name', 'priority');
        label1.setAttribute('for', 'title');
        label1.innerHTML = "Title";
        label2.setAttribute('for', 'description');
        label2.innerHTML = "Description:";
        label3.setAttribute('for', 'dueDate');
        label3.innerHTML = "Due Date:";
        label4.setAttribute('for', 'priority');
        label4.innerHTML = "Priority: ";
        form.classList.add("form");
        li1.append(label1);
        li1.append(input1);
        li2.append(label2);
        li2.append(textArea2);
        li3.append(label3);
        li3.append(input3);
        li4.append(label4);
        li4.append(input4);
        ul.append(li1);
        ul.append(li2);
        ul.append(li3);
        ul.append(li4);
        form.prepend(ul);
        document.body.prepend(form);

    }

    deleteForm(){
        div.classList.remove('form');
    }

    setFields(){
        //set the form fields
    }

    getFields(){
        //should return the form field answers as an object
    }
}

export {form}