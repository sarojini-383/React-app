import React from "react"
import {observer} from "mobx-react";  
import {toJS,action} from 'mobx'

import Todo from "../../stores/models/Todo.js"; 
import todoStore from "../../stores/TodoStore/TodoStore.js"; 

@observer
class AddTodo extends React.Component {
 
    render() {
     let todoInstance =new Todo();
        return <div className="todo-block">
         <input  className="check-box" checked={this.props.todoObj.checkedStatus} onClick={()=>todoInstance.onCompleteTodo(this.props.todoObj)}  type="checkBox"/>
        <input  className="input-text" disabled={this.props.todoObj.checkedStatus} defaultValue={this.props.todoObj.todoContent} type="text"/>
        <button className="remove-btn" onClick={() =>todoStore.onRemoveTodo(this.props.todoObj)} >X</button>
   
       </div>
    }
}

export default  AddTodo;