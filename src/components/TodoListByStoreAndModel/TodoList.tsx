import React from "react"

import todoStore from "../../stores/TodoStore/TodoStore" 

class TodoList extends React.Component {
 
 render(){
     return<div>{todoStore.selectedFilter}</div>
 }   
}

export {TodoList}
