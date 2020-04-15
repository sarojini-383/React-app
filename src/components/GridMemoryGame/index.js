import React from 'react';

import {GridGameContainer} from './styledcomponent.js'

import gameStore from '../../stores/GameStore'

import Header from './Header'
import {observable} from 'mobx'
import {observer} from 'mobx-react'

import GameField from './GameField'

import gridInfo from './Json.js'
import CellModel from '../../stores/models/Cell'

@observer
class GridMemoryGame extends React.Component{
  
@observable level=0;

    constructor(props){
        super(props);
       
        const gridSize=gridInfo[this.level].gridSize;
      
        for(let i=0;i< gridSize*gridSize; i++){
         let gridInstance =new CellModel()
         gameStore.updateGridGameInfo(gridInstance,gridInfo)
         }     
         gameStore.setGridCells()
    }
    

    render(){
        return (<GridGameContainer>
            <Header />
            <GameField />
        </GridGameContainer>)    
    }
    
}
export default GridMemoryGame;