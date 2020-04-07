import React from "react";
import {NavbarStyle,NavbarChildStyle,ThemeStyle,TopScoreStyle} from './styledComponent.js'

class Navbar extends React.Component{

   
    render(){
    let {score,topScore,onChangeTheme,selectedTheme}=this.props;
        return<NavbarStyle selectedTheme={selectedTheme}>
<h1>Emoji Game</h1>
<NavbarChildStyle>
<b>Score:{score}</b>
<TopScoreStyle><b>Top score:</b>{topScore}</TopScoreStyle>
<ThemeStyle selectedTheme={selectedTheme} onClick={onChangeTheme}>DARK THEME</ThemeStyle>
</NavbarChildStyle>
</NavbarStyle>
    }
}

export  default Navbar;