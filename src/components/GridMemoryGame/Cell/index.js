import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import gridInfo from '../Json.js';

import gameStore from '../../../stores/GameStore';
import themeStore from '../../../stores/ThemeStore';
import {CellStyle} from '../styledcomponent.js';

@observer
class Cell extends React.Component{
@observable shouldShowHiddenCells=true;
@observable isClickedOnCell=false;
@observable gridColor=themeStore.theme==='Light'?'#2a4365':'2b6cb0';
timeOutId;
c;


    componentDidMount(){
      const level = gameStore.level;
     // this.timeOutId= setTimeout(()=>{this.shouldShowHiddenCells=false},1000*(level+3));
    
    this.getGridColors();
    this.timeOutId= setTimeout(()=>{
        
        this.shouldShowHiddenCells=false;
        this.getGridColors();
        this.timeOutId= setTimeout(
            
            ()=>{
            this.getGridColors();
            gameStore.resetGame();
        }
        ,1000*(level+3)+300)
        
    }
    ,1000*(level+3)+300);
    
   // alert(this.shouldShowHiddenCells);
    
    }
    
    componentWillUnmount(){
        clearTimeout(this.timeOutId);
       clearTimeout(this.c);
    }
    
  @action.bound
  getGridColors=()=>{
        const {eachCell} =this.props;
            if(this.shouldShowHiddenCells){
                if( eachCell.isHidden){
                   this.gridColor=themeStore.selectedTheme==='Light'?'green':'#4fd1c5';
                }
                 else {
                  this.gridColor=themeStore.selectedTheme==='Light'?'#294264':'#2c5282';
                }
            }
            else {
               // alert('sdfghjk')
                if(!this.isClickedOnCell){
                        this.gridColor=themeStore.selectedTheme==='Light'?'#294264':'#2c5282';
                      
                        // this.c=setTimeout(()=>{console.log('welcome')},6600);
                        
                        // clearTimeout(()=>{gameStore.resetGame()},c)
                }
                 if(this.isClickedOnCell && eachCell.isHidden){
                    
                 this.gridColor=themeStore.selectedTheme==='Light'?'green':'#4fd1c5';
                }
                else if(this.isClickedOnCell && !eachCell.isHidden){
                   // alert('red')
                    this.gridColor='red';
                }
                
            }
        
            }    
            
    onCellClick=()=>{
        const {eachCell} =this.props;
         if(!this.isClickedOnCell){
                 this.isClickedOnCell=true;
                // gameStore.onCellClick(eachCell.id)
             const a=setTimeout (()=>{gameStore.onCellClick(eachCell.id)
                 
                 clearTimeout(a)
             },100);
            }
    }

  
    render(){
        this.getGridColors();
        const {eachCell} =this.props;
        const gridSize=gridInfo[gameStore.level].gridSize;
        const gridWidth=gridInfo[gameStore.level].gridWidth;
        
       console.log('render',this.gridColor);
        return <CellStyle width={`${gridWidth/gridSize-10}px`} height={`${gridWidth/gridSize-10}px`} disabled={this.shouldShowHiddenCells} onClick={this.onCellClick} color={this.gridColor}>
        {eachCell.isHidden?'yes':'No'}
        </CellStyle>
        }

}
export default Cell

