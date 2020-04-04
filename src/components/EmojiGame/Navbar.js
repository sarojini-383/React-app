import React from "react";
import {NavbarStyle,NavbarChildStyle,ThemeStyle} from './styledComponent.js'

class Navbar extends React.Component{

   
    render(){
    let {score,topScore}=this.props;
        return<NavbarStyle>
<h1>Emoji Game</h1>
<NavbarChildStyle>
<b>Score:{score}</b>
<b>Top score:{topScore}</b>
<ThemeStyle>DARK THEME</ThemeStyle>
</NavbarChildStyle></NavbarStyle>
    }
}

export  default Navbar;