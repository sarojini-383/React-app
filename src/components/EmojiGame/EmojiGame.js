import React from "react";
import EmojiCard from "./EmojiCard";
import WinOrLose from "./WinOrLose"
import Navbar from "./Navbar"

import {EmojiCardsContainer} from './styledComponent.js'

class EmojiGame extends React.Component {
 state={
    emojis:[
        {id:1, isClicked:false, name:'Exploding Head', image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png'},
        {id:2, isClicked:false, name:'Grinning Face with Sweat', image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png'},
        {id:3, isClicked:false, name:'Smiling Face with Heart-Eyes', image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png'},
        {id:4, isClicked:false, name:'Smirking Face', image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png'},
        {id:5, isClicked:false, name:'Thinking Face', image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png'},
        {id:6, isClicked:false, name:'Winking Face', image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png'},
        {id:7, isClicked:false, name:'Grinning Face', image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png'},
        {id:8, isClicked:false, name:'Crying Face', image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png'},
        {id:9, isClicked:false, name:'Astonished Face', image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png'},
        {id:10, isClicked:false, name:'Face with Tears of Joy', image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png'},
        {id:11, isClicked:false, name:'Star-Struck', image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png'},
        {id:12, isClicked:false, name:'Winking Face with Tongue', image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png'},
        ],
        gameState:'PLAYING',
        score:0,
        topScore:0,
       // selectedTheme:{light:'light',dark:'dark'}
       selectedTheme:"light",
    }


onEmojiClick=(emoji)=>{
    let score=this.state.score;
    let emojis = this.state.emojis;

    if(!emoji.isClicked && score !== emojis.length){
      this.incrementScore();
      this.shuffleEmojis();
    }
    else if(emoji.isClicked && score === emojis.length ){
        this.setState({gameState:'WON'}) 
    }
    else{
        this.setState({gameState:'Lose'})
    }
        emoji.isClicked=!emoji.isClicked;

}
 shuffleEmojis=()=>{
  let temp = this.state.emojis;
for (let i = temp.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    this.setState({ emojis: temp });
}
incrementScore=()=>{
    let score=this.state.score;
    let emojis = this.state.emojis;
    
    score++;
    this.setState({ score: score});
          //  alert(score)
}
onPlayAgainClick=()=>{
        this.setTopScore();
        this.resetGame();
    
}
setTopScore=()=>{
        let score=this.state.score;

        if(score > this.state.topScore){
        this.setState({ topScore: score});  
        }
}
onChangeTheme=()=>{
    
    let {selectedTheme}=this.state;
    if(selectedTheme==="light"){
     this.setState({ selectedTheme: "dark"});    
    }
    else{
     this.setState({ selectedTheme: "light"});    
    }
    
}
resetGame=()=>{
     this.setState({gameState:'PLAYING',
        score:0,
        })
    let a=this.state.emojis;
    a.map(emoji=>emoji.isClicked=false)
        this.setState({ emojis: [...a]}); 
}
render() {
    
 return <div>
 <Navbar score={this.state.score} topScore={this.state.topScore} onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}></Navbar>
 {(this.state.gameState ==='PLAYING')?<EmojiCardsContainer selectedTheme={this.state.selectedTheme}>
 {this.state.emojis.map(emoji=>
<EmojiCard emoji={emoji} onEmojiClick={()=>this.onEmojiClick(emoji)} selectedTheme={this.state.selectedTheme} />)}
</EmojiCardsContainer>
:<WinOrLose selectedTheme={this.state.selectedTheme} score={this.state.score} isWon={this.state.gameState==='WON'?true:false} onPlayAgainClick={this.onPlayAgainClick}/>}
</div>
}

}
export default EmojiGame;

