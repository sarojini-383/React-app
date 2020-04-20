/*global fetch */
import {observable,action,computed} from "mobx";   

import Todo from "../../stores/models/Todo"; 


class TodoStore{
    
    @observable todos
    @observable selectedFilter
    @observable todosListFromNetwork=[];
    constructor(){
       try {fetch('https://todo-list-2.getsandbox.com/todos')
            .then(response => response.json())
            .then(json =>
               json.forEach(eachTodo=>this.todosListFromNetwork.push(eachTodo))
            );}
            catch(e){
                alert('heyyyyyy')
            }
        this.todos=[];
        this.selectedFilter='All'
    }

//  todosCountReaction=reaction(()=>{return this.todos.length},(len)=>{if(len===0)alert('congrats')})
 
//  todosReaction=reaction(((this.todos).map(todo =>{return todo.todoContent})),(title)=>{alert(title)})

    
@computed get activeTodosCount() {

    return [...this.todos].filter(todo => todo.checkedStatus === false).length
    }
    

 @computed get filteredTodos() {
     switch (this.selectedFilter) {
         case 'All':
                   return this.todos  
        case 'Active':
        return [...this.todos].filter(todo => todo.checkedStatus === false)

        case 'completed':
        return [...this.todos].filter(todo => todo.checkedStatus === true)

    } 
 }
 @action.bound
 onClearCompleted(){
    this.todos=(this.todos.filter((todo) => (todo.checkedStatus === false)))
 }

@action.bound
onAddTodo(event){
   let todoInstance =new Todo(event)
   this.todos.push(todoInstance.todoObj);
}    

@action.bound
onChangeSelectedFilter(filterState){
    this.selectedFilter=filterState
}

@action.bound
onRemoveTodo(todo){
        let confirm = window.confirm("Do You Really Want to delete it..!")
        if (confirm) {
            let todosAry = [...this.todos]
            let index= todosAry.indexOf(todo)
            todosAry.splice(index, 1)
                this.todos=todosAry;
        }
}
}
const todoStore=new TodoStore()
export default todoStore
