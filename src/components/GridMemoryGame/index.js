import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import gameStore from '../../stores/GameStore';
import themeStore from '../../stores/ThemeStore';

import {Main,GridGameContainer,LevelStyle} from './styledcomponent.js';
import Header from './Header';
import GameField from './GameField';
import GameResult from './GameResult';
import gridInfo from './Json.js';


@observer
class GridMemoryGame extends React.Component{
@observable level; 
@observable gridWidth;
@observable gridSize;
    constructor(props){
        super(props);
            this.init();
            gameStore.updateGridGameInfo();
    }
    
    init=()=>{
        this.level=gameStore.level;
        this.gridWidth=gridInfo[gameStore.level].gridWidth;
        this.gridSize=gridInfo[gameStore.level].gridSize;
    }


    render(){
        const level=gameStore.level;
        const gridWidth=gridInfo[gameStore.level].gridWidth;
        const gridSize=gridInfo[gameStore.level].gridSize;
        const gameLevel=gameStore.level;
       
        return(<Main theme={themeStore.selectedTheme}>
                <LevelStyle>Top Level:{gameStore.topLevel}</LevelStyle>
                <Header gridWidth={`${gridWidth}px`} level={level} />
                {!gameStore.isGameCompleted?
                <GridGameContainer  gridWidth={`${gridWidth}px`}>     
                    <GameField currentLevelGridCells={gameStore.currentLevelGridCells} level={gameLevel} gridWidth={gridWidth} gridSize={gridSize} />
                </GridGameContainer>:<GameResult onPlayAgainClick={gameStore.onPlayAgainClick} />}
              </Main>);
            }
    }
export default GridMemoryGame;

