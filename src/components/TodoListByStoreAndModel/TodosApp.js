import React from "react"

import {observer} from "mobx-react";  
import {toJS,action} from 'mobx'
import todoStore from "../../stores/TodoStore/TodoStore.js"; 
import Todo from "../../stores/models/Todo.js"; 

import AddTodo from "./AddTodo.js"; 
import TodoFooter from "./TodoFooter.js"; 





@observer
class TodosApp extends React.Component {
 
 onSubmit=(event)=>{
  if (event.key === 'Enter') {
   todoStore.onAddTodo(event.target.value)
   event.target.value=""
  }
 }
 
 render(){
     return <div>
      <div className="header">todos</div>
      <input className="user-input"  onKeyDown={(event)=>{this.onSubmit(event)}}  type="text" id="myInput" placeholder="what needs to be done !">
      </input>
      <div className="paper">{todoStore.filteredTodos.map(todo=><AddTodo key=  {todo.id} todoObj={todo}/>)}
     </div>
     {todoStore.todos.length>0?<div><TodoFooter /></div>:null}
     </div>
 }   
}

export default TodosApp