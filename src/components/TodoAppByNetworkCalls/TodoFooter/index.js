import React from "react"


import {action} from 'mobx'
//import todoStore from "../../stores/TodoStore/TodoStore.js"; 


import {observer,inject} from "mobx-react"; 



@inject('todoStoreForNetworkCalls')
@observer
class TodoFooter extends React.Component {
 
 @action.bound
 onChangeSelectedFilter(filter){
  this.props.todoStoreForNetworkCalls.selectedFilter=filter
 }
 
 
      render(){
       console.log(this.props.todoStoreForNetworkCalls.activeTodosCount)
       return<div className="todo-filters">
         <span>{this.props.todoStoreForNetworkCalls.activeTodosCount} items left</span>
        <div className="Todos" onClick={()=>this.props.todoStoreForNetworkCalls.onChangeSelectedFilter('All')}>all</div>
        <div className="Todos" onClick={()=>this.props.todoStoreForNetworkCalls.onChangeSelectedFilter('Active')} >active</div>
        <div className="Todos" onClick={()=>this.props.todoStoreForNetworkCalls.onChangeSelectedFilter('completed')} >completed</div>
        <div onClick={()=>this.props.todoStoreForNetworkCalls.onClearCompleted()}>clear completed</div>
        </div>

      }

}

export default  TodoFooter;