//need to import the date library
import closestTo from 'date-fns/closestTo'
//https://date-fns.org/v2.19.0/docs/closestTo
export default class Project{
    //todos will be an array of todos
    //sort them by day
    constructor(toDos, name){
        this.toDos = toDos;
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get toDos(){
        return this._toDos;
    }

    set toDos(toDos){
        this._toDos = toDos;
    }
    //adds an todo to the list
    add(toDo){
        this._toDos.push(toDo);
        console.log(this._toDos);
    }
    //sorts todos in order based off date
    //parameter should be the object of todos and their date
    //value pairs
    
    SortDatesInOrder(getToDosWithDates){
        let dates = [];
        for(let key in getToDosWithDates){
            let date = getToDosWithDates[key];
            dates.push();
        }
        //rip this runtime
        //O(n^2)
        let sortedDates = [];
        while(dates.length > 0 ){
            const today = new Date();
            const closestDate = closestTo(today, dates);
            const idx = dates.indexOf(closestDate);
            sortedDates.push(closestDate);
            dates.splice(idx ,1);
        }

        return sortedDates;
    }
    //gets todos with their corresponding dates as 
    //key value pairs
    getToDosWithDates(toDos){
        let twd = {};
        for(let i =0; i< toDos.length; i++){
            twd.toDos[i] = toDos[i].dueDate();
        }
        return twd;
    }

    //sorts the to-dos based off day order 
    //parameter - an array of unsorted todos
    //returns an array of sorted to dos
    sortToDos(toDos){
        let sortedDates = this.SortDatesInOrder(this.getToDosWithDates(toDos));
        let sorted = false;
        let sortedToDos = [];
        while(!sorted){
            sorted = true;
            let i= 0;
            while(i < toDos.length){
                let cur = toDos[i].dueDate;
                let date = sortedDates[i];
                if(date === cur){
                    sortedToDos.push(toDos[i]);
                    toDos.slice(i, 1);
                    i = 0;
                }
                i++;
            }
        }
    }
    
}