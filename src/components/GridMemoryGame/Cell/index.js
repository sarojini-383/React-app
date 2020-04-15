import React from 'react';
import {observable} from 'mobx'

import gameStore from '../../../stores/GameStore'
class Cell extends React.Component{

@observable isClickedOnCell=false;
 

  componentDidMount(){

  }
  onCellClick=()=>{
    const {eachCell} =this.props;
    this.isClickedOnCell=true;
    eachCell.isHidden=!eachCell.isHidden
    gameStore.onCellClick()
}
  
    render(){
        const {eachCell,onCellClick} =this.props;
       return (eachCell.isHidden ?
            <div style={{width:'80px',height:'80px', backgroundColor:'green',margin:'5px'}}
                onClick={this.onCellClick}>
            </div>:<div style={{width:'80px',height:'80px', backgroundColor:'pink',margin:'5px'}}>
        </div>)
    }
}
export default Cell;