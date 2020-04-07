import React from "react";
import {WinOrLoseStyle,PlayAgainButtonStyle,WinTxtStyle,LoseTxtStyle,ScoreStyle} from './styledComponent.js'


class WinOrLose extends React.Component{

   
    render(){
    let {score,isWon,onPlayAgainClick,selectedTheme}=this.props;
        return<WinOrLoseStyle selectedTheme={selectedTheme}>
        <ScoreStyle>{score}</ScoreStyle>
        {isWon?<WinTxtStyle>You Won</WinTxtStyle>:<LoseTxtStyle>Yos Lose!</LoseTxtStyle>}
        <PlayAgainButtonStyle onClick={onPlayAgainClick}>Play Again</PlayAgainButtonStyle>
        </WinOrLoseStyle>
    }
}

export default WinOrLose;