import React from "react"
import {observable,action} from "mobx";   
import {observer} from 'mobx-react'


@observer
class Todo extends React.Component{
@observable todoObj=[]
constructor(event){
 super(event)
        this.todoObj.id=Math.random().toString();
        this.todoObj.todoContent = event;
        this.todoObj.checkedStatus = false;
}

 @action.bound
 onCompleteTodo(e){
e.checkedStatus=!e.checkedStatus;
  }
}
export default Todo