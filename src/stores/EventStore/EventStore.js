import {action,observable,toJS} from 'mobx'

import Event from "../../stores/models/Event.js"; 

class EventStore{
@observable events=[];

@action.bound  
  onAddEvent(event){
    console.log(event)
let eventInstance =new Event(event)

this.events.push(eventInstance);
  }  
  
} 

const eventStore =new EventStore()
export default eventStore