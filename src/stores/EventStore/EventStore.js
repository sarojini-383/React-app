import {action,observable,toJS} from 'mobx'

import Event from "../../stores/models/Event.js"; 

class EventStore{
@observable events=[];

@action.bound  
  onAddEvent(name,location){
    
//console.log(event)
let eventInstance =new Event(name,location)
this.events.push(toJS(eventInstance));

  }  

onDeleteEvent(event){
            let eventsAry = [...this.events]
            let index = eventsAry.indexOf(event)
            eventsAry.splice(parseInt(index), 1)
            this.events=eventsAry;
} 
}

const eventStore =new EventStore()
export default eventStore