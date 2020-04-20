import React from "react"
import {observer} from "mobx-react";  

import todoStore from "../../stores/TodoStore/TodoStore"; 

import AddTodo from "./AddTodo"; 
import TodoFooter from "./TodoFooter"; 





@observer
class TodosApp extends React.Component {
 
componentDidMount(){
    todoStore.fetchData();
}
 onSubmit=(event)=>{
  if (event.key === 'Enter') {
   todoStore.onAddTodo(event.target.value)
   event.target.value=""
  }
 }
 
getTodosOfNetwork=(eachTodo)=>{
 console.log("mystore",todoStore.todos)
    return <div className="paper">{todoStore.todos.map((todo,index)=>
      <AddTodo key=  {todo.id} todoObj={todo}/>)}</div>
 }
 
 render(){
    // alert(todoStore.todos.length)
    console.log(todoStore.todos.length);
    console.log(todoStore.isLoading);
     
     
     return <div>
     
      <div className="header">todos</div>
      <input className="user-input"  onKeyDown={(event)=>{this.onSubmit(event)}}  type="text" id="myInput" placeholder="what needs to be done !">
      </input>
      {/*<div className="paper">{todoStore.filteredTodos.map(todo=><AddTodo key=  {todo.id} todoObj={todo}/>)}
     </div>
            {todoStore.todos.length>0?<div><TodoFooter /></div>:null}
      */}
      
    { /* {todoStore.todos.length>0? `${todoStore.isLoading}`?'':''}:''}*/}
     
    
    {/* {todoStore.todos.length>0?
     
     <div className="paper">{todoStore.todos.map((todo,index)=>
      <AddTodo key=  {todo.id} todoObj={todo}/>)}</div>:<div class="loader"></div>}*/}

      </div>
 }   
}

export default TodosApp
