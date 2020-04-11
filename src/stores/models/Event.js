//import React from "react"

import {observable,action} from "mobx";   
import {observer} from 'mobx-react'

import eventStore from "../../stores/EventStore/EventStore.js"; 


class Event{
@observable id
@observable name
@observable eventLocation

constructor(name,location){
          this.id=Math.random();
          this.name =name;
          this.eventLocation =location;
}


@action.bound
onUpdateEventDetails(){
 
}

}
export default Event