export default class toDo{

    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    set title(title){
        if(title){ 
            this._title = title;
        }
    }

    get title(){
        return this.title;
    }

    set Description(description){
        if(description){ 
            this._description = description;
        }
    }

    get Description(){
        return this.description;
    }

    set dueDate(date){
        if(date){ 
            this._dueDate = date;
        }
    }

    get dueDate(){
        return this.dueDate;
    }

    set priority(p){
        if(p){ 
            this._priority = p;
        }
    }

    get priority(){
        return this.priority;
    }

}

   