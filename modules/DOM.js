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

    appendElements(arr){
        for(let i = 0;i < arr.length ; i++){
            this.parent.appendChild(arr[i]);
        }
    }

    createElements(ele ,num){
        //creates an array of a specific type of DOM element
        let arr = [];
        for(let i = 0;i < num; i++){
            const type = document.createElement(ele);
            arr.push(type);
        }
        return arr;
    }
}
