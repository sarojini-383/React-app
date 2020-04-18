import {observable} from 'mobx';

class CellModel{
@observable id='';
@observable isHidden='';
//@observable isClicked='';


    constructor(){
        this.id=Math.random();
        this.isHidden=false;
       // this.isClicked=false;
    }    
}

export default CellModel;