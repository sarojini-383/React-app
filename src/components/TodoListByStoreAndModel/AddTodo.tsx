import React from "react"
import {observer} from "mobx-react";  
//import {toJS,action} from 'mobx'

import todoStore from "../../stores/TodoStore/TodoStore"; 

//import { Todo } from "../MobxTodosList/TodoApp";
import Todo from "../../stores/models/Todo"


type todoObj={
 checkedStatus:boolean
 todoContent:string
}
type addTodoProps={
 todoObj:todoObj
}

@observer
class AddTodo extends React.Component<addTodoProps> {
 
    render() {
     let todoInstance =new Todo(event);
     let {todoObj} =this.props
        return <div className="todo-block">
         <input  className="check-box" checked={todoObj.checkedStatus} onClick={()=>todoInstance.onCompleteTodo(todoObj)}  type="checkBox"/>
        <input  className="input-text" disabled={todoObj.checkedStatus} defaultValue={todoObj.todoContent} type="text"/>
        <button className="remove-btn" onClick={() =>todoStore.onRemoveTodo(todoObj)} >X</button>
   
       </div>
    }

    
}

export default  AddTodo;