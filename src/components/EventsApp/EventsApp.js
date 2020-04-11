import React from "react"
import {action} from 'mobx'
import {observer} from 'mobx-react'
import eventStore from "../../stores/EventStore/EventStore.js"
import {EventListStyle,Editbutton,Delbutton} from './StyledComponent.js'

import AddEvent from './AddEvent.js'

@observer
class EventsApp extends React.Component {
    
 onChangeEventName(){
//console.log(event.target.value);

 }
 
 renderEvents(){
  //console.log('lo',eventStore.events.eventlocation)
 return  eventStore.events.map(event=> <EventListStyle>
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