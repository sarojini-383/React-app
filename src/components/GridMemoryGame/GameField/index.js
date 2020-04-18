import React from 'react';
import {observer} from 'mobx-react';

import gameStore from '../../../stores/GameStore';
import Cell from '../Cell';
import gridInfo from '../Json.js';
import {GridsField} from '../styledcomponent.js';

@observer
class GameField extends React.Component{
    renderGridArray=()=>{
        
     
    }
    
    render(){
           const gridWidth=gridInfo[gameStore.level].gridWidth;
       // console.log("store",gameStore.currentLevelGridCells)
        const {cells} =this.props;
//alert(gameStore.currentLevelGridCells.length)
        return<GridsField width={`${gridWidth}px`}>
       
            {gameStore.currentLevelGridCells.map(eachCell=>
                <Cell level={gameStore.level} key={eachCell.id} eachCell={eachCell} onCellClick={this.onCellClick}/>)}
        </GridsField>
    }
}
export default GameField;