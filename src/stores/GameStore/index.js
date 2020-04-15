import {observable} from 'mobx'

let c=0;
class GameStore{
@observable level=0;
@observable topLevel=0;
@observable currentLevelGridCells=[];
@observable selectedCellsCount=3;
@observable isGameCompleted=false;


updateGridGameInfo=(gridInstance,gridInfo)=>{
    this.currentLevelGridCells.push(gridInstance)
    }

setGridCells=()=>{

    let arr =this.currentLevelGridCells;
    let n=this.selectedCellsCount;
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        this.currentLevelGridCells[n].isHidden=true;
        taken[x] = --len in taken ? taken[len] : len;
    }
      let temp = this.currentLevelGridCells;
    for (let i = temp.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    this.currentLevelGridCells= temp;
}

onCellClick=()=>{
  let a =this.currentLevelGridCells.filter(eachCell=>eachCell.isHidden===true)
    if (a.length===0){
      this.level+=1;
        alert('level')
  }
}

}

const gameStore=new GameStore();
export default gameStore;

