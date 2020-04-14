import React from "react"
import {observer} from 'mobx-react'

import eventStore from "../../stores/EventStore/EventStore"
import Event from "../../stores/models/Event"; 

import {EventListStyle,Editbutton,Delbutton} from './StyledComponent'

import AddEvent from './AddEvent'


@observer
class EventsApp extends React.Component {
    
 
 renderEvents(){
  
 return  eventStore.events.map(event => <EventListStyle>
 <div key={event.id} ><p>Event Name:{event.name}</p>
 <p>Event Location:{event.eventLocation}</p></div>
 <div><Editbutton>Edit</Editbutton>
<Delbutton onClick={()=>eventStore.onDeleteEvent(event)} >Delete</Delbutton></div>
 </EventListStyle>)
 }
render(){
  return <div><AddEvent/>
<div>{this.renderEvents()}
</div>
  </div>
}
    
}

export default EventsApp