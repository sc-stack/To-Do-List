    class toDo{

        constructor(title, description, dueDate, priority){
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }

        get title(){
            return this.title;
        }

        get Description(){
            return this.description;
        }

        get dueDate(){
            return this.dueDate;
        }

        get priority(){
            return this.priority;
        }

    }

    export {toDo};