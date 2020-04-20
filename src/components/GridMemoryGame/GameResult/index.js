import React from 'react';

import {GameResultContainer,WishTxtStyle,PlayAgainButtonStyle} from '../styledcomponent' ;

class GameResult extends React.Component {
   
    render() {
        const {onPlayAgainClick}=this.props;
        return(
            <GameResultContainer>
                <WishTxtStyle>Congratulations! You Completed all the levels.</WishTxtStyle>
                <PlayAgainButtonStyle onClick={onPlayAgainClick} style={{backgroundColor:'blue', width:'100px'}}>Play Again</PlayAgainButtonStyle>
            </GameResultContainer>);
    }
}

export default GameResult;
