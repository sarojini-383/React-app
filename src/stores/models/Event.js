import React from "react"

import {observable,action} from "mobx";   
import {observer} from 'mobx-react'

import eventStore from "../../stores/EventStore/EventStore.js"; 

@observer
class Event extends React.Component{
@observable id
@observable name
@observable location

constructor(event){

 super(event)
          this.id=Math.random();
          this.name = event.eventName;
          this.location = event.eventLocation;
}


}
export default Event