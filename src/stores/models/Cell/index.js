import {observable} from 'mobx';

class CellModel{
@observable id='';
@observable isHidden='';
    constructor(){
        this.id=Math.random();
        this.isHidden=false;
    }    
}

export default CellModel;