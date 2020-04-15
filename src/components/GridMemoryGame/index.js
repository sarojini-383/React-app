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
@observable level=gameStore.level;   
@observable gridSize;
    constructor(props){
        
        super(props);
       console.log("level",this.level);
         
        this.gridSize=gridInfo[gameStore.level].gridSize;
             
        for(let i=0;i< this.gridSize*this.gridSize; i++){
         let gridInstance =new CellModel()
         gameStore.updateGridGameInfo(gridInstance,gridInfo)
         }     
         gameStore.setGridCells()
    }
    a=()=>{
        alert('l')
    }

    render(){
        console.log("level in main",gameStore.level)
        console.log("size",this.gridSize);
        {this.a()}
        return (<GridGameContainer>
            <Header />
            <GameField />
        </GridGameContainer>)    
    }
    
}
export default GridMemoryGame;