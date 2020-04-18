import {observable} from "mobx"; 

class ThemeStore{
@observable selectedTheme
    constructor(){
        this.selectedTheme="Dark";
    }
    
    setCurrentTheme(theme){
        if (theme==='Dark') {
            this.selectedTheme='Light';
        }
        else {
            this.selectedTheme='Dark';
        }
    }
   }

const themeStore=new ThemeStore();
export default themeStore;