import React from "react"
import {observable,action} from "mobx";   
import {observer} from 'mobx-react'


// type todoProps={
//  id:string;
//  todoContent:string;
//  checkedStatus:boolean;
// }
@observer
class Todo extends React.Component{
@observable todoObj:any=[]
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