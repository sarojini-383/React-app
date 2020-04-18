import React from 'react';
import gameStore from '../../../stores/GameStore';
import themeStore from '../../../stores/ThemeStore';
import Header from '../Header';

import {GameResultContainer,WishTxtStyle,LevelStyle,PlayAgainButtonStyle} from '../styledcomponent' 

class GameResult extends React.Component {
    render() {
        return(
            <GameResultContainer>
            {/*<LevelStyle>{gameStore.level}</LevelStyle>
            <Header />*/}
            <WishTxtStyle>Congratulations! You Completed all the levels.</WishTxtStyle>
            <PlayAgainButtonStyle onClick={gameStore.onPlayAgainClick} style={{backgroundColor:'blue', width:'100px'}}>Play Again</PlayAgainButtonStyle>
            </GameResultContainer>);
    }
}

export default GameResult
