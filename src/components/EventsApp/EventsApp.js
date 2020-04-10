import React from "react"

//import eventStore from '../../stores/EventStore/EventStore.js'
import eventStore from "../../stores/EventStore/EventStore.js"
import {EventAppContainer,Events,EventTag,AddEventBtn} from './StyledComponent.js'


class EventsApp extends React.Component {
 
render(){
    console.log(eventStore.events)
   return(<EventAppContainer>
    <Events><EventTag><input type="text" placeholder="Event name"/></EventTag>
    <EventTag><input type="text" placeholder="Event location"/></EventTag></Events>
    <AddEventBtn onClick={eventStore.onAddEvent}>Add Event</AddEventBtn>
    {eventStore.events.map(event=><AddEvent/>)}
    
    </EventAppContainer>);
}
    
}

export default EventsApp