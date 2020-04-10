import React from "react"
import {observer} from "mobx-react";  
import {observable,action,toJS} from 'mobx'

import Event from "../../stores/models/Todo.js"; 
import eventStore from "../../stores/EventStore/EventStore.js"

import {EventAppContainer,Events,EventTag,AddEventBtn} from './StyledComponent.js'


@observer
class AddEvent extends React.Component {

eventObj=observable({eventName:'',eventLocation:''});

@action.bound
   onChangeEventName(e){
     this.eventObj.eventName=e.target.value
}

  @action.bound
 onChangeEventLocation(e){
     this.eventObj.eventLocation=e.target.value
 }

@action.bound
renderEvents(){
  eventStore.events.map(event=><p></p>)
} 
    render() {
       // console.log('pi')
         //    console.log(eventStore.events)
   return(<EventAppContainer>
    <Events><EventTag><input type="text" placeholder="Event name" onChange={this.onChangeEventName} /></EventTag>
    <EventTag><input type="text" placeholder="Event location" onChange={this.onChangeEventLocation}/></EventTag></Events>
    <AddEventBtn onClick={()=>eventStore.onAddEvent(this.eventObj)}>Add Event</AddEventBtn>
   <div><EventList/>
   </div>
    </EventAppContainer>);
    }
}

export default  AddEvent;