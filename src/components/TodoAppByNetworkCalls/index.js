import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'
import {action} from 'mobx'
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure'
import NoDataView from '../common/NoDataView'

import AddTodo from './AddTodo/index.js'
import TodoFooter from "./TodoFooter"; 

@inject('todoStoreForNetworkCalls')
@observer
class TodoAppByNetworkCalls extends Component{
    
  componentDidMount(){
      console.log(this.props.todoStoreForNetworkCalls)
      this.doNetworkCalls();
  }
   
   getStore=()=>{
       return this.props.todoStoreForNetworkCalls;
   }
   
    doNetworkCalls=()=>{
        
        this.getStore().getTodos()
    }

    
    renderTodosList=(todos)=>{
        const {todoStoreForNetworkCalls}=this.props;
      if(todos.length===0){
          return <NoDataView/>
      }
    return todos.map(todo=><AddTodo  key={todo.id} todo={todo}/>)
    }
    render(){
        
        const{getTodoApiStatus,getTodoApiError,todos}=this.getStore();
        return (
        <div className="todos-main-container">
        <div className="header">todos</div>
        <input className="user-input" onKeyDown={this.onSubmit}  type="text" id="myInput" placeholder="what needs to be done !">
        </input>
         <div className="paper">
        <LoadingWrapperWithFailure
            apiStatus={getTodoApiStatus}
            apiError={getTodoApiError}
            onRetryClick={this.doNetworkCalls}
            renderSuccessUI={()=>this.renderTodosList(todos)}
         /></div>
        {todos.length>0?<div><TodoFooter /></div>:null}
     
         
         </div>);   
    }
}

export default TodoAppByNetworkCalls