import React from "react"
import {action} from 'mobx'

import eventStore from "../../stores/EventStore/EventStore.js"
import {EventAppContainer,Events,EventTag,AddEventBtn} from './StyledComponent.js'
import AddEvent from './AddEvent.js'

class EventsApp extends React.Component {
    
 onChangeEventName(){
//console.log(event.target.value);

 }
 
render(){
  return <div><AddEvent/></div>
}
    
}

export default EventsApp