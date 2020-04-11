import React from "react"
import {observer} from "mobx-react";  
import {observable,action,toJS} from 'mobx'

import Event from "../../stores/models/Todo.js"; 
import eventStore from "../../stores/EventStore/EventStore.js"

import {EventAppContainer,Events,EventTag,AddEventBtn} from './StyledComponent.js'


@observer
class AddEvent extends React.Component {

@observable eventName="";
@observable eventLocation="";

@action.bound
   onChangeEventName(e){
     this.eventName=e.target.value;
}

  @action.bound
 onChangeEventLocation(e){
     this.eventLocation=e.target.value;
 }
   @action.bound
onAddEvent(){
  eventStore.onAddEvent(this.eventName,this.eventLocation) ;
}

    render() {

     console.log(eventStore.events)
   return(<EventAppContainer>
    <Events><EventTag><input type="text" value={this.eventName} placeholder="Event name" onChange={this.onChangeEventName} /></EventTag>
    <EventTag><input type="text" value={this.eventLocation} placeholder="Event location" onChange={this.onChangeEventLocation}/></EventTag></Events>
    <AddEventBtn onClick={this.onAddEvent}>Add Event</AddEventBtn>
    </EventAppContainer>);
    }
}

export default  AddEvent;