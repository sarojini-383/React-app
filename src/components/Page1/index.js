import React from "react";
import logo from "../../logo.svg";
// import {Page1Container} from './styledcomponent'
// //import { renderToString } from 'react-dom/server'
// import styled from '@emotion/styled'
// import { css, jsx } from '@emotion/core'

// const Button = styled.button`
//   padding: 10px;
//   margin:10px;
//   font-size: 24px;
// `
// const style = css`
//   color: hotpink;
// `

// const SomeComponent = ({ children }) => (
//   <div css={style}>
//     Some hotpink text.
//     {children}
//   </div>
// )

// const anotherStyle = css({
//   textDecoration: 'underline'
// })

// const AnotherComponent = () => (
//   <div css={anotherStyle}>Some text with an underline.</div>
// )

// const color = 'white'





//const Fancy = styled(Basic)`
//  color: hotpink;
//  border:2px solid black;
//`
// const Container = styled.div(props => ({
//   display: 'flex',
//   flexDirection: props.column && 'column',
// // flexDirection: props.row && 'row'
// }))
// const Section = styled.section`
//   background: #333;
//   color: #fff;
//   margin:10px;
// `
// // this component has the same styles as Section but it renders an aside
// const Aside = Section.withComponent('aside')
// const Saru = Section.withComponent('saru')
// const Saru1 = Section.withComponent('saru1')


// const Child = styled.div`
//   color: red;
// `

// const Parent = styled.div`
//   ${Child} {
//     color: green;
//   }
// `


// function Page1() {
 
 
    
//   return (

// }

let c=0;
let a=[];
class Page1 extends React.Component {
 state={
      l:['😀','😅','😂','🤣','😇','😍','🥰','😘','😛','😋','🤪','🤩'],
   
    //  l:['saru','siri','lasii','nani','sree'],
      res:[],
      score:0,
      playState:true
    }

shuffle=(i)=>{

a.push(i);
 this.setState({ res:[...a]});


if(this.state.res.includes(i)){
    this.setState({ score:c});
    this.setState({ playState:false});
}

 else{
    c++;
    this.setState({ score:c});
}
let temp = this.state.l;

for (let i = temp.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    this.setState({ l: temp });
}
    goBack = () => {

        c=0;
        this.setState({ score:c});
            this.setState({ playState:true});
            a=[];
            this.setState({ res:[...a]});
    }

showStatus=()=>{

     return(<div>
    <p>{this.state.score}</p>
  {(this.state.score === this.state.l.length)? <h1>You Won!......</h1>:<h1>You Lost!......</h1>}

        <button  onClick={this.goBack}>Play again</button>
    </div>);
}
            render() {

        return (
<div>
<p>Your Score:{this.state.score}</p>
{(this.state.playState && this.state.score<this.state.l.length)? 
<div style={{textAlign:'center',margin:'10px',display:'flex',flexWrap:'wrap'}}>
{this.state.l.map(i=><button style={{fontSize:'150px',margin:'5px'}}onClick={()=>this.shuffle(i)}>{i}</button>)}
</div>:this.showStatus()}

</div>
);

}
}
export default Page1;

/*  <div className="bg-gray-800 h-screen flex flex-col justify-center items-center text-white*/

/*
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Page1Container =styled.div`
${tw `bg-gray-800 h-screen flex flex-col justify-center items-center text-white`}
`
*/

/*p1
<Page1Container>
  <img src={logo} className="w-1/2"/>
  <p>Edit src/App.js and save to reload</p>
<h1>Page 1</h1></Page1Container>*/

/*p2
    <div
    css={{
      backgroundColor: 'hotpink',
      '&:hover': {
        color: 'lightgreen'
      }
    }}
  >
    This has a hotpink background.
  </div>);*/
  
  /*p3
   <SomeComponent>
    <AnotherComponent />
  </SomeComponent>
  
<Container column>
    <Button>This is a regular button.</Button>
    <Button primary>This is a primary button.</Button>
  </Container>
<Container row>
    <Button>This is a regular button.</Button>
    <Button primary>This is a primary button.</Button>
  </Container>
  
  <Container column>
    <Button>This is a regular button.</Button>
    <Button primary>This is a primary button.</Button>
  </Container>
  


<Fancy />*/


/*doubt1

 <Parent>
      <Child>Green because I am inside a Parent</Child>
    </Parent>
    <Child>Red because I am not inside a Parent</Child>
 
 */