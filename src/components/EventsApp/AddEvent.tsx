import React from "react"
import {observer} from "mobx-react";  
import {observable,action} from 'mobx'

// import Event from "../../stores/models/Todo"; 
import eventStore from "../../stores/EventStore/EventStore"

import {EventAppContainer,Events,EventTag,AddEventBtn} from './StyledComponent'


@observer
class AddEvent extends React.Component {

@observable eventName:string="";
@observable eventLocation:string="";

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