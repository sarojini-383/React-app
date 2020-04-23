import React from 'react';

let todoId = 1;

class Todo extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.todoObj)
        return <div className="todo-block">
        <input  className="check-box"   checked={this.props.todoObj.checkedStatus} onClick={()=>this.props.handlecheck(this.props.todoObj)} type="checkBox"/>
        <input  className="input-text"  disabled={this.props.todoObj.checkedStatus} defaultValue={this.props.todoObj.todoContent} type="text"/>
        <button className="remove-btn" onClick={() =>this.props.removeTodo(this.props.todoObj)}>X</button>
        </div>
    }
}


class TodosList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { userTodoList: [], filterState: "All", todoItemsLeft: false, clearcompletedDisplay: false }
    }
    userInput = (event) => {
        let obj = {}
        obj.todoContent = event.target.value;
        obj.checkedStatus = false;
        obj.id = todoId;

        if (this.state.userTodoList.length >= 0 && event.key === 'Enter') {
            if (event.target.value === "")
                alert("please Enter what needs to be done")
            else
                this.addTodo(obj);
            event.target.value = ""
        }
    }
    addTodo = (obj) => {

        this.setState((state) => ({
            userTodoList: state.userTodoList = [...state.userTodoList, obj]
        }))

        todoId += 1;
        this.setState({ todoItemsLeft: true })
    }

    OnremoveTodo = (userTodo) => {

            let todosAry = this.state.userTodoList

            let index = todosAry.indexOf(userTodo)
            todosAry.splice(parseInt(index,10), 1)
     
        let confirm = window.confirm("Do You Really Want to delete it..!")
      
        if (confirm) {
           console.log(todosAry) 
            this.setState({
                userTodoList: todosAry
            })

        }

        if (this.state.userTodoList.length === 1) {
            this.setState({ todoItemsLeft: false })
        }
    }

    OnhandleCheck = (userTodo) => {



        let todosAry = [...this.state.userTodoList]
        let index = todosAry.indexOf(userTodo)

        todosAry[index].checkedStatus = !todosAry[index].checkedStatus;

        this.setState({
            userTodoList: todosAry
        })

        let completedTodos = [...this.state.userTodoList].filter((todo) => todo.checkedStatus === true)
        if (completedTodos.length >= 1) {
            this.setState({ clearcompletedDisplay: true })
        }
        else {
            this.setState({ clearcompletedDisplay: false })
        }
    }

    allItems = () => {
        this.setState({
            filterState: "All"
        })
    }

    activeItems = () => {
        this.setState({
            filterState: "Active"
        })
    }

    completedItems = () => {
        this.setState({
            filterState: "Completed"
        })
    }

    clearCompletedItems = () => {
        this.setState({
            userTodoList: (this.state.userTodoList.filter((todo) => (todo.checkedStatus === false)))
        });


    }

    renderTodoList = (filterState) => {
            console.log(this.state.userTodoList)
        switch (filterState) {
            case "All":
                let allTodos =[...this.state.userTodoList];
                console.log(allTodos)
                return allTodos.map((todo) =>
                    <Todo key={todo.id}  handlecheck ={this.OnhandleCheck} todoObj={todo} removeTodo={this.OnremoveTodo} />
                )

            case "Active":
                let activeTodos = [...this.state.userTodoList].filter((todo) => todo.checkedStatus === false)
                return activeTodos.map((todo) =>
                    <Todo key={todo.id} handlecheck ={this.OnhandleCheck} todoObj={todo} removeTodo={this.OnremoveTodo} />
                )

            case "Completed":
                let completedTodos = [...this.state.userTodoList].filter((todo) => todo.checkedStatus === true)
                return completedTodos.map((todo) =>
                    <Todo  key={todo.id} handlecheck ={this.OnhandleCheck} todoObj={todo} removeTodo={this.OnremoveTodo} />
                )
        }

    }

    itemsLeft = (i) => {
        let todosLeft = [...this.state.userTodoList].filter((todo) => todo.checkedStatus === false)
        return todosLeft.length
    }

    render() {
        return <div >
        <div className="header">todos</div>
        

        <input className="user-input"  onKeyDown={this.userInput}  type="text" id="myInput" placeholder="what needs to be done !">
        </input>

         <div className="paper"> {this.renderTodoList(this.state.filterState)}</div>

       <div>{this.state.todoItemsLeft ?
        <div className="todo-filters">
        <div><span>{this.itemsLeft(0)}</span> items left</div>
        <div className="Todos" onClick={this.allItems}>all</div>
        <div className="Todos" onClick={this.activeItems} >active</div>
        <div className="Todos" onClick={this.completedItems} >completed</div>
        <div>{this.state.clearcompletedDisplay ?<div onClick={this.clearCompletedItems} >clear completed</div>:null}</div>
        </div>:null}</div>

       </div>
    }
}



export { TodosList, Todo };
