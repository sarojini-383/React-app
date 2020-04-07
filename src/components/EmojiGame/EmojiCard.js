import React from "react";
import {EmojiCardStyle} from './styledComponent.js'

class EmojiCard extends React.Component{

   
    render(){
    let {emoji,onEmojiClick}=this.props;
        return<EmojiCardStyle onClick={onEmojiClick} selectedTheme={this.props.selectedTheme} >
        <img src={emoji.image} width='200px'/>
        <p>{emoji.name}</p>
        </EmojiCardStyle>
    }
}

export default EmojiCard;