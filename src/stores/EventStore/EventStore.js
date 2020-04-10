import {action,observable} from 'mobx'

import Event from "../../stores/models/Event.js"; 

class EventStore{
@observable events=[];

@action.bound  
  onAddEvent(){
  let eventInstance =new Event()
  this.events.push(eventInstance);
  }  
  
} 

const eventStore =new EventStore()
export default eventStore