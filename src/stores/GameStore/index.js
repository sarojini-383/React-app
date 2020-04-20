import {observable} from 'mobx';
import CellModel from '../../stores/models/Cell';
import gridInfo from '../../components/GridMemoryGame/Json.js';


class GameStore{
@observable level;
@observable topLevel;
@observable currentLevelGridCells;
@observable selectedCellsCount;
@observable isGameCompleted;

  constructor(){
    this.init();
  }
  
  init=()=>{
    this.level=0;
    this.topLevel=0;
    this.currentLevelGridCells=[];
    this.selectedCellsCount=0;
    this.isGameCompleted=false;
  }
  
updateGridGameInfo=()=>{
  this.currentLevelGridCells=[];
  let array=[];
  const gridSize=gridInfo[this.level].gridSize;
  
  for(let i=0;i< gridSize*gridSize; i++){
        const gridInstance =new CellModel();
        array.push(gridInstance);
  }     
  gameStore.setGridCells(array,gridSize);
}

setGridCells=(array,gridSize)=>{
    array.map((eachCell,index)=>{if(index<gridSize){eachCell.isHidden=true}});
   
    let temp = array;
    for (let i = temp.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
    }
   this.currentLevelGridCells=temp; 

}

onCellClick=(id)=>{
  let currentCellIndex=this.currentLevelGridCells.findIndex(cell=>cell.id===id);
  if(this.currentLevelGridCells[currentCellIndex].isHidden===true){
   this.incrementSelectedCellsCount();
  }
  else{
    this.goToInitialLevelAndUpdateCells();
  }
}

incrementSelectedCellsCount=()=>{
  let hiddenCellCount=gridInfo[this.level].hiddenCellCount;
  
    this.selectedCellsCount+=1;
    if(this.selectedCellsCount===hiddenCellCount){
      this.level+=1;
      if(this.level<2){
        this.goToNextLevelAndUpdateCells();
    }
    else{
      this.isGameCompleted=true;
    }
  }
    
}
onPlayAgainClick=()=>{
  this.topLevel=this.level;
  this.resetGame();
  }
  
goToNextLevelAndUpdateCells=()=>{
  this.currentLevelGridCells=[];
  this.selectedCellsCount=0;
  this.updateGridGameInfo();
  }

goToInitialLevelAndUpdateCells=()=>{
  this.topLevel=this.level;
  this.currentLevelGridCells=[];
  this.selectedCellsCount=0;
  this.level=0;
  this.isGameCompleted=false;
  this.updateGridGameInfo();
  }

resetGame=()=>{
  this.topLevel=this.level;
  this.currentLevelGridCells=[];
  this.selectedCellsCount=0;
  this.level=0;
  this.isGameCompleted=false;
  this.updateGridGameInfo();
  }
}

const gameStore=new GameStore();
export default gameStore;

