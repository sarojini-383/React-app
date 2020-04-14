import React,{Component} from 'react'
import {Provider,inject,observer} from 'mobx-react'
import {observable} from 'mobx'

class A extends Component{
render(){
   return <Provider temp={"saru"} >
   <B temp={'from b'}/></Provider>
}    
}


@inject("temp")
@observer
class B extends Component{
    
@observable name;
  constructor(props){
      super(props)
      this.name=""
  }  

  onChange=(event)=>{
    this.name=event.target.value;   
   } 

render(){
    const {temp}=this.props
   return<div>
      <input style={{backgroundColor:'green'}} value={this.name} onChange={this.onChange} />
   <C name={this.name}/></div>
}    
}


@inject("temp")
class C extends Component{
render(){

    const {name}=this.props
        console.log(name)
   return <div><b>{name}</b></div>
}    
}

export default A