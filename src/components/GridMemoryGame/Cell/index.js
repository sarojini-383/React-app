import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import gameStore from '../../../stores/GameStore';
import themeStore from '../../../stores/ThemeStore';

import {CellStyle} from '../styledcomponent.js';

@observer
class Cell extends React.Component{
    
@observable shouldShowHiddenCells=true;
@observable isClickedOnCell=false;
gridColor='';
gameLevel=gameStore.level;
InitialTimeOutId;
timeOutIdToReset;
timeOutIdForNextLevel;

    componentDidMount(){
        
        this.InitialTimeOutId= setTimeout(()=>{
        this.shouldShowHiddenCells=false;
        this.timeOutIdToReset= setTimeout(()=>{
            gameStore.resetGame();
            this.shouldShowHiddenCells=true;
        }
        ,2000*(this.gameLevel+3)+300);
    }
    ,1000*(this.gameLevel+3)+300);
    }
    
    componentWillUnmount(){
        clearTimeout(this.InitialTimeOutId);
        clearTimeout(this.timeOutIdToReset);
        clearTimeout(this.timeOutIdForNextLevel);
    }
    


getGridColors=()=>{
    const {props:{eachCell:{isHidden}},isClickedOnCell,shouldShowHiddenCells}=this;
    
    if(isHidden && (isClickedOnCell || shouldShowHiddenCells)){
        this.gridColor=themeStore.selectedTheme==='Light'?'green':'#4fd1c5';
     }
    else if(!isHidden && isClickedOnCell){
        this.gridColor='red';
    }
    else{
        this.gridColor=themeStore.selectedTheme==='Light'?'#294264':'#2c5282';
    }

}
            
    onCellClick=()=>{
        const {eachCell} =this.props;
         if(!this.isClickedOnCell){
             this.isClickedOnCell=true;
             this.timeOutIdForNextLevel=setTimeout (()=>{gameStore.onCellClick(eachCell.id);
             },100);
            }
      }

  
    render(){
        this.getGridColors();
        const {gridWidth,gridSize} =this.props;
        const currentCellWidth=`${gridWidth/gridSize-10}px`;
        const currentCellHeight=`${gridWidth/gridSize-10}px`;
        
        return <CellStyle width={currentCellWidth} height={currentCellHeight} disabled={this.shouldShowHiddenCells} onClick={this.onCellClick} color={this.gridColor}>
        </CellStyle>;
        }

}
export default Cell;

