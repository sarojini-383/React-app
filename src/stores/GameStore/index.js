import {observable} from 'mobx'
import CellModel from '../../stores/models/Cell'
import gridInfo from '../../components/GridMemoryGame/Json.js'


class GameStore{
@observable level=0;
@observable topLevel=0;
@observable currentLevelGridCells=[];
@observable selectedCellsCount=0;
@observable isGameCompleted=false;

updateGridGameInfo=()=>{
  this.currentLevelGridCells=[];
  let array=[]
  const gridSize=gridInfo[this.level].gridSize;
  for(let i=0;i< gridSize*gridSize; i++){
        const gridInstance =new CellModel();
        array.push(gridInstance);
       // this.currentLevelGridCells=array
        //this.currentLevelGridCells.push(gridInstance);  
  }     
  gameStore.setGridCells(array,gridSize);
}

setGridCells=(array,gridSize)=>{
    
   // let array =this.currentLevelGridCells;
    console.log("lenvel",array.length)
    array.map((eachCell,index)=>{if(index<gridSize){eachCell.isHidden=true}})
   
    let temp = array;
    for (let i = temp.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
    }
   this.currentLevelGridCells=temp; 
  // alert(this.currentLevelGridCells.length)
}

onCellClick=(id)=>{
  let currentCellIndex=this.currentLevelGridCells.findIndex(cell=>cell.id===id);
 // let currentCell=this.currentLevelGridCells[currentCellIndex]
  if(this.currentLevelGridCells[currentCellIndex].isHidden===true){
   this.incrementSelectedCellsCount()
  }
  else{
    this.goToInitialLevelAndUpdateCells();
  }
}

incrementSelectedCellsCount=()=>{
  let hiddenCellCount=gridInfo[this.level].hiddenCellCount;
  
    this.selectedCellsCount+=1;
    if(this.selectedCellsCount===hiddenCellCount){
      if(this.level<4){
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
  this.level+=1;
  //this.currentLevelGridCells=[];
  this.selectedCellsCount=0;
  this.updateGridGameInfo();
  }

goToInitialLevelAndUpdateCells=()=>{

  //this.currentLevelGridCells=[];
  this.selectedCellsCount=0;
  this.level=0;
  this.isGameCompleted=false;
  this.updateGridGameInfo();
  }

resetGame=()=>{
  //this.currentLevelGridCells=[];
  this.selectedCellsCount=0;
  this.level=0;
  this.isGameCompleted=false;
  this.updateGridGameInfo();
  }
}

const gameStore=new GameStore();
export default gameStore;

