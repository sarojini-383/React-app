import React from 'react';
import {observer} from 'mobx-react';

import gameStore from '../../../stores/GameStore';
import gridInfo from '../Json.js';
import {GridsField} from '../styledcomponent.js';
import Cell from '../Cell';

@observer
class GameField extends React.Component{

    
    render(){
        const gridWidth=gridInfo[gameStore.level].gridWidth;
        return(<GridsField width={`${gridWidth}px`}>
       
            {gameStore.currentLevelGridCells.map(eachCell=>
                <Cell level={gameStore.level} key={eachCell.id} eachCell={eachCell} onCellClick={this.onCellClick}/>)}
        </GridsField>);
    }
}
export default GameField;