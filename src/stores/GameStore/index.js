import {observable} from 'mobx'

//import gridInfo from './Json.js'

class GameStore{
@observable level=0;
@observable topLevel=0;
@observable currentLevelGridCells=[];
@observable selectedCellsCount=3;
@observable isGameCompleted=false;


updateGridGameInfo=(gridInstance,gridInfo)=>{
    
    this.currentLevelGridCells.push(gridInstance)
   // console.log(gridInfo)
    
    }

setGridCells=()=>{
    let arr =this.currentLevelGridCells;
    let n=this.selectedCellsCount;
    //console.log(arr.length)
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        result[n].isHidden=true;
        taken[x] = --len in taken ? taken[len] : len;
    }
    console.log("main",arr)
   // console.log("random",result);
    this.currentLevelGridCells=result
}

updateCurrentGridCells=(result)=>{
       console.log("random1",result); 
      // const {currentLevelGridCells}=this.currentLevelGridCells;
    // currentLevelGridCells.map(i=>console.log(i))  
}

}

const gameStore=new GameStore();
export default gameStore;

