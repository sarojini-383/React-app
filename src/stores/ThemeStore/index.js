
import {observable,reaction} from "mobx"; 

class ThemeStore{
    
    @observable selectedTheme
    constructor(){
        this.selectedTheme="Light mode"
    }
    
    setCurrentTheme(theme){
   
   if (this.selectedTheme==='Light mode') {
      this.selectedTheme='Dark mode';
    }
    else {
      this.selectedTheme='Light mode';
    }
    }
    
   // selectedThemeReaction=reaction(()=>{return this.selectedTheme},(theme)=>{alert(`myTheme ${theme}`)})
}


const themeStore=new ThemeStore()
export default themeStore