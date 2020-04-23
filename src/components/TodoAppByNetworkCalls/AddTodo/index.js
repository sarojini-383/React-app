import React from "react"
import {observer,inject} from "mobx-react"; 



@inject('todoStoreForNetworkCalls')
@observer
class AddTodo extends React.Component{
     onRemove=(todo)=>{
         console.log(todo)
         this.props.todoStoreForNetworkCalls.onRemoveTodo(todo)
     }
    render() {
    // let todoInstance =new Todo(event);
     const {todo,todoStoreForNetworkCalls} =this.props

        return <div className="todo-block">
        <input   className="check-box"  defaultChecked={false}   type="checkBox"/>
        <input   className="input-text" disabled={todo.completed} defaultValue={todo.title} type="text"/>
        <button  className="remove-btn" onClick={()=>this.onRemove(todo)} >X</button>
       </div>
    }

    
}

export default  AddTodo;

