import { EvalDevToolModulePlugin } from "webpack";

class Form{
    //key value pairs so title: example title, 
    constructor(title, description, dueDate, priority){
        this.title = title.title;
        this.description = description.description;
        this.dueDate = dueDate.dueDate;
        this.priority = priority.priority;
    }

    deleteForm(){
        
    }

    setFields(){
        //set the form fields

    }

    getFields(){
        //should return the form field answers as an object
    }
}

export class form {bruh}