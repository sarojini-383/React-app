import React from "react"

import {observable,action,reaction} from "mobx";   
import {observer} from 'mobx-react'
import todoStore from "../../stores/TodoStore/TodoStore.js"; 

@observer
class Todo extends React.Component{


    
@observable todoobj={}
//@observable id=Math.random()
//@observable todoContent="";
//@observable checkedStatus=false;

constructor(event){
 super(event)
 //const todoObj = observable({
   // id: Math.random(),
    //todoContent :event,
    //checkedStatus :false
    //})
        this.todoObj.id=Math.random();
         this.todoobj.todoContent = event;
         this.todoobj.checkedStatus = false;
}

 @action.bound
 onCompleteTodo(e){
e.checkedStatus=!e.checkedStatus;
  }
}
export default Todo