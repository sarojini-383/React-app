import React from "react";
import {observable} from "mobx"; 
import {observer} from "mobx-react"; 

import {CounterAppContainer,ButtonStyle,FooterStyle,CounterTxtStyle} from './styledComponent.js'

@observer 
class CounterApp extends React.Component{
@observable count=0;

  getCurrentCount=()=>{
 return this.count; 
  }
  
  setCurrentCount=(count)=>{
      this.count=count
  }

  
onIncrement=()=>{
    this.count = this.count + 1
    this.setCurrentCount(this.count);
}

ondecrement=()=>{
    this.count = this.count - 1
    this.setCurrentCount(this.count);
}
handleOnchange=(event)=>{
    this.count=event
}
   
    render(){
        return<CounterAppContainer>
        <CounterTxtStyle>Counter</CounterTxtStyle>
        
        <FooterStyle>
        <ButtonStyle onClick={this.onIncrement}>+</ButtonStyle>
        <input type="number" onChange={(e)=>this.handleOnchange(e.target.value)} value={this.getCurrentCount()}/>
        <ButtonStyle onClick={this.ondecrement}>-</ButtonStyle></FooterStyle>
        </CounterAppContainer>
}
}

export default CounterApp;