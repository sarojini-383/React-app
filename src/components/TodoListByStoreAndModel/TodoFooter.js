import React from "react"


import {action} from 'mobx'
import todoStore from "../../stores/TodoStore/TodoStore.js"; 

class TodoFooter extends React.Component {
 
 @action.bound
 onChangeSelectedFilter(filter){
  todoStore.selectedFilter=filter
 }
 
 
      render(){
       console.log(todoStore.activeTodosCount)
       return<div className="todo-filters">
         <span>{todoStore.activeTodosCount} items left</span>
        <div className="Todos" onClick={()=>todoStore.onChangeSelectedFilter('All')}>all</div>
        <div className="Todos" onClick={()=>todoStore.onChangeSelectedFilter('Active')} >active</div>
        <div className="Todos" onClick={()=>todoStore.onChangeSelectedFilter('completed')} >completed</div>
        <div onClick={()=>todoStore.onClearCompleted()}>clear completed</div>
        </div>

      }

}

export default  TodoFooter;