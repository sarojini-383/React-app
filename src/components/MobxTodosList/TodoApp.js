import React from 'react';
import {observable,computed} from "mobx"; 
import {observer} from "mobx-react"; 

let todoId = 1;



@observer
class Todo extends React.Component {
    render() {
        let {todoObj,removeTodo,handlecheck} =this.props
        return <div className="todo-block">
        <input  className="check-box"   checked={todoObj.checkedStatus} onClick={()=>handlecheck(todoObj)} type="checkBox"/>
        <input  className="input-text"  disabled={todoObj.checkedStatus} defaultValue={todoObj.todoContent} type="text"/>
        <button className="remove-btn"  onClick={()=>removeTodo(todoObj)}>X</button>
        </div>
    }
}


@observer 
class TodoApp extends React.Component {

@observable userTodoList= []
@observable filterState= "All"
@observable  todoItemsLeft= false
@observable  clearcompletedDisplay= false 

@computed get unfinishedTodoCount() {
        return this.userTodoList.filter(todo => todo.checkedStatus === false).length
    }
  
    userInput = (event) => {
        let obj = {}
        obj.todoContent = event.target.value
        obj.checkedStatus= false
        obj.id= todoId

        if (this.userTodoList.length >= 0 && event.key === 'Enter') {
            if (event.target.value === "")
                alert("please Enter what needs to be done")
            else
                this.addTodo(obj);
            event.target.value = ""
        }
    }
    addTodo = (obj) => {
     this.userTodoList = [...this.userTodoList, obj]
        todoId += 1;
         this.todoItemsLeft= true;
    }

    OnremoveTodo = (userTodo) => {

        let confirm = window.confirm("Do You Really Want to delete it..!")
        if (confirm) {
            let todosAry = [...this.userTodoList]

            let index = todosAry.indexOf(userTodo)
            todosAry.splice(index, 1)

                this.userTodoList=todosAry;
        }

        if (this.userTodoList.length === 0) {
             this.todoItemsLeft= false
        }
    }

    OnhandleCheck = (userTodo) => {



        let todosAry = [...this.userTodoList]
        let index = todosAry.indexOf(userTodo)

        todosAry[index].checkedStatus = !todosAry[index].checkedStatus;


            this.userTodoList=todosAry

        let completedTodos = [...this.userTodoList].filter((todo) => todo.checkedStatus === true)
        if (completedTodos.length >= 1) {

            this.clearcompletedDisplay= true 
        }
        else {
             this.clearcompletedDisplay= false
        }
    }

    allItems = () => {
        
            this.filterState="All"

    }

    activeItems = () => {

            this.filterState="Active"

    }

    completedItems = () => {
            this.filterState= "Completed"
    }

   clearCompletedItems = () => {
   this.userTodoList=(this.userTodoList.filter((todo) => (todo.checkedStatus === false)))
    }

    renderTodoList = (filterState) => {

        switch (filterState) {
            case "All":
                return [...this.userTodoList].map((todo) =>
                    <Todo key ={todo.id} handlecheck ={this.OnhandleCheck} todoObj={todo} removeTodo={this.OnremoveTodo} />
                )

            case "Active":
                let activeTodos = [...this.userTodoList].filter((todo) => todo.checkedStatus === false)
                return activeTodos.map((todo) =>
                    <Todo key={todo.id} handlecheck ={this.OnhandleCheck} todoObj={todo} removeTodo={this.OnremoveTodo} />
                )

            case "Completed":
                let completedTodos = [...this.userTodoList].filter((todo) => todo.checkedStatus === true)
                return completedTodos.map((todo) =>
                    <Todo  key={todo.id} handlecheck ={this.OnhandleCheck} todoObj={todo} removeTodo={this.OnremoveTodo} />
                )
        }

    }
    render() {
        return <div >
        <div className="header">todos</div>
        

        <input className="user-input"  onKeyDown={this.userInput}  type="text" id="myInput" placeholder="what needs to be done !">
        </input>

         <div className="paper"> {this.renderTodoList(this.filterState)}</div>

       <div>{this.todoItemsLeft ?
        <div className="todo-filters">
        <div>{/*<span>{this.itemsLeft(0)}</span>*/} <span>{this.unfinishedTodoCount}</span>items left</div>
        <div className="Todos" onClick={this.allItems}>all</div>
        <div className="Todos" onClick={this.activeItems} >active</div>
        <div className="Todos" onClick={this.completedItems} >completed</div>
        <div>{this.clearcompletedDisplay ?<div onClick={this.clearCompletedItems} >clear completed</div>:null}</div>
        </div>:null}</div>

       </div>
    }
}



export { TodoApp, Todo };
