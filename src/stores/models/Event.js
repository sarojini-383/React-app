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
 alert('p')
 super(event)
         this.id=Math.random();
          this.name = event;
          this.location = false;
}

}
export default Event