import React from "react"
import {observer} from "mobx-react";  

import todoStore from "../../stores/TodoStore/TodoStore"; 

import AddTodo from "./AddTodo"; 
import TodoFooter from "./TodoFooter"; 





@observer
class TodosApp extends React.Component {
 
 onSubmit=(event)=>{
  if (event.key === 'Enter') {
   todoStore.onAddTodo(event.target.value)
   event.target.value=""
  }
 }
 
getTodosOfNetwork=(eachTodo)=>{
    return <div className="paper">{todoStore.todosListFromNetwork.map((todo,index)=>
      <AddTodo key=  {todo.id} todoObj={todo}/>)}</div>
 }
 
 render(){
  
     return <div>
     
      <div className="header">todos</div>
      <input className="user-input"  onKeyDown={(event)=>{this.onSubmit(event)}}  type="text" id="myInput" placeholder="what needs to be done !">
      </input>
      {/*<div className="paper">{todoStore.filteredTodos.map(todo=><AddTodo key=  {todo.id} todoObj={todo}/>)}
     </div>*/}
     
      {this.getTodosOfNetwork()}     
     {todoStore.todos.length>0?<div><TodoFooter /></div>:null}
      </div>
 }   
}

export default TodosApp