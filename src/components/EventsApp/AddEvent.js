import React from "react"
import {observer} from "mobx-react";  
//import {toJS,action} from 'mobx'

import Event from "../../stores/models/Todo.js"; 
import todoStore from "../../stores/TodoStore/TodoStore.js"; 

@observer
class AddEvent extends React.Component {
 
    render() {
     let eventInstance =new Event();
        return<div>hi
        </div>
    }
}

export default  AddEvent;