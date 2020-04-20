import React from 'react';
import {observer} from 'mobx-react';

import {GridsField} from '../styledcomponent.js';
import Cell from '../Cell';

@observer
class GameField extends React.Component{

    render(){
        const {currentLevelGridCells,gridWidth,gridSize,level}=this.props;

        return(<GridsField width={`${gridWidth}px`}>
            {currentLevelGridCells.map(eachCell=>
                <Cell  gridWidth={gridWidth} gridSize={gridSize} level={level} key={eachCell.id} eachCell={eachCell} onCellClick={this.onCellClick}/>)}
        </GridsField>);
    }
}
export default GameField;