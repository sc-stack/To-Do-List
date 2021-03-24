export default class toDo{
    //givese the values that the todo list will have
    //priority of 1 = highest 3 = lowestx

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
        return this._title;
    }

    set description(description){
        if(description){ 
            this._description = description;
        }
    }

    get description(){
        return this._description;
    }

    set dueDate(date){
        if(date){ 
            this._dueDate = date;
        }
    }

    get dueDate(){
        return this._dueDate;
    }

    set priority(p){
        if(p){ 
            this._priority = p;
        }
    }

    get priority(){
        return this._priority;
    }

    getInArr(){
        //gets the todo elements in an array
        console.log(this._description);
        return [this._title, this._description, this._dueDate, this._priority];
    }

    getDaysLeft(){
        let date = this._dueDate;
    }
}

   