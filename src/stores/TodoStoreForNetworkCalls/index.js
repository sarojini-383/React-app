import {observable,action,computed} from 'mobx'

import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import Todo from "../../stores/models/Todo"; 


import {
    API_INITIAL,
    API_FETCHING,
    API_SUCCESS,
    API_FAILED,
    
    
} from '@ib/api-constants'

class TodoStoreForNetworkCalls{
    @observable getTodoApiStatus
    @observable getTodoApiError
    @observable todos
    @observable selectedFilter
    todoService
    constructor(todoService){
        this.todoService=todoService;
        this.init()
    }
        @action
    init(){
        this.getTodoApiStatus=API_INITIAL;
        this.getTodoApiError=null;
        this.todos=[];
        this.selectedFilter='All'
    }
        @action
    clearStore(){
        this.init()
    }
    
    @action.bound
    setTodoAPIResponse(todos){
        this.todos=todos.map(todo=>todo)
    }
        @action.bound
    setTodoAPIStatus(apiStatus){
        this.getTodoApiStatus=apiStatus
    }
        @action.bound
    setTodoAPIError(error){
        this.getTodoApiError=error
    }
            @action.bound
    getTodos(){
        const todoPromise=this.todoService.getTodos();
        
        return bindPromiseWithOnSuccess(todoPromise)
        .to(this.setTodoAPIStatus,this.setTodoAPIResponse)
        .catch(this.setTodoAPIError)
        
    }
    onRemoveTodo(todo){
        
       // DELETE `https://fashionboutique.com/customers/123`
        
        //DELETE http:`https://jsonplaceholder.typicode.com/todos/${todo.id}`
        
        let confirm = window.confirm("Do You Really Want to delete it..!")
        if (confirm) {
        let todosAry = [...this.todos] 
          let index=todosAry.findIndex(cell=>cell.id===todo.id);
            console.log(index)
            todosAry.splice(index, 1)
                this.todos=todosAry;
    }
    
}
}

export default TodoStoreForNetworkCalls;