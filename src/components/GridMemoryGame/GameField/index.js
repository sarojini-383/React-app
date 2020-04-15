import React from 'react';

import gameStore from '../../../stores/GameStore'
import Cell from '../Cell'

import {GridsField} from '../styledcomponent.js'

class GameField extends React.Component{
    
  
    renderGridArray=()=>{
        const {cells} =this.props;
        return <div style={{display:'flex',flexWrap:'wrap', width:'300px'}}>{gameStore.currentLevelGridCells.map(i=><Cell />)}</div>
    }
    
    render(){
        return <div>{this.renderGridArray()}</div>
    }
}
export default GameField;