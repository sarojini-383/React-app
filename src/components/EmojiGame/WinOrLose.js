import React from "react";

class WinOrLose extends React.Component{

   
    render(){
    let {score,isWon,onPlayAgainClick}=this.props;
        return<div>
        <p>Your Score:{score}</p>
        {isWon?<h1>You Won</h1>:<h1>Yos Lost the game</h1>}
        <button onClick={onPlayAgainClick}>Play again</button>
        </div>
    }
}

export default WinOrLose;