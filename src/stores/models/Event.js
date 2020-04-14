import {observable,action} from "mobx";   





class Event{
@observable id:string
@observable name:string
@observable eventLocation:string

constructor(name,location){
          this.id=Math.random().toString();
          this.name =name;
          this.eventLocation =location;
}


@action.bound
onUpdateEventDetails(){
 
}

}
export default Event