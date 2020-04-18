import React from 'react';

import {Main,GridGameContainer,LevelStyle} from './styledcomponent.js';

import gameStore from '../../stores/GameStore';
import themeStore from '../../stores/ThemeStore';


import Header from './Header';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import GameField from './GameField';
import GameResult from './GameResult';

import gridInfo from './Json.js';


@observer
class GridMemoryGame extends React.Component{
@observable level=gameStore.level;   
@observable gridSize;
    constructor(props){
     super(props);
     gameStore.updateGridGameInfo();
    }
    
    

    render(){
 const gridWidth=gridInfo[this.level].gridWidth;
        return<Main theme={themeStore.selectedTheme}>
            <LevelStyle>Top Level:{gameStore.topLevel}</LevelStyle>
            <Header  />
       {!gameStore.isGameCompleted?
       <GridGameContainer  width={`${gridWidth}px`}>     
            <GameField />
        </GridGameContainer>
            :<GameResult />}</Main>;
}
}
export default GridMemoryGame;

/*
        return<Main theme={themeStore.selectedTheme}>
        {!gameStore.isGameCompleted?
            <GridGameContainer  width={`${gridWidth}px`}> 
            <LevelStyle>Top Level:{gameStore.topLevel}</LevelStyle>
            <Header  />
            <GameField />
        </GridGameContainer>
            :<GameResult />}</Main>;
            */