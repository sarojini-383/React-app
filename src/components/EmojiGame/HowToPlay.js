import React from "react";
import {FooterTxtStyle} from './styledComponent.js'


class HowToPlay extends React.Component{

   
    render(){
        let selectedTheme=this.props;
    return <FooterTxtStyle selectedTheme={selectedTheme}>
   <h1> How to play?</h1>
   <h3>Get points by clicking on an image but don't click on any image more than once!</h3></FooterTxtStyle>
    }
}

export default HowToPlay;