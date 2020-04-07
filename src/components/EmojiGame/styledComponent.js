import styled from '@emotion/styled';
import tw from 'tailwind.macro';

 
const EmojiCardsContainer=styled.div`
${tw `flex  flex-wrap w-full justify-around bg-blue-100 p-8`}
background-color:${props=>props.selectedTheme==="light"?'bee3f8':'#003152'};
 `

const EmojiCardStyle=styled.div`
${tw `flex  flex-col justify-center items-center h-64 w-64 shadow-custom  bg-white m-4`}
background-color:${props=>props.selectedTheme==="light"?'#fff':' #2b6cb0;'};
color:${props=>props.selectedTheme==="light"?'black':'white'};
`
const NavbarStyle=styled.div`
${tw `flex justify-between  p-2 `}
background-color:${props=>props.selectedTheme==="light"?'white':' #32527B'};
color:${props=>props.selectedTheme==="light"?'black':'white'};
`
const NavbarChildStyle=styled.div`
${tw `flex items-baseline`}
`
const TopScoreStyle=styled.div`
${tw `mx-4`}`

const ThemeStyle=styled.div`
${tw `p-1 `}
border:${props=>props.selectedTheme==="light"?'solid black 1px':'solid white 1px'};

`

const WinOrLoseStyle=styled.div`
${tw `flex  flex-col justify-center items-center bg-blue-100 h-screen`}
background-color:${props=>props.selectedTheme==="light"?'bee3f8':'#003152'};

`

const PlayAgainButtonStyle=styled.div`
${tw `p-2 bg-indigo-600 rounded-md text-white text-base`}`

const WinTxtStyle=styled.div`
${tw `text-green-700 text-3xl `}`

const LoseTxtStyle=styled.div`
${tw `text-red-700 text-3xl `}`

const ScoreStyle=styled.h1`
${tw `text-5xl`}`

// const dynamicStyle =styled.div`${tw props =>
  
//     color: ${props.color};
//   `

export {EmojiCardsContainer,EmojiCardStyle,NavbarStyle,NavbarChildStyle,ThemeStyle,TopScoreStyle,WinOrLoseStyle,PlayAgainButtonStyle
,WinTxtStyle ,  LoseTxtStyle,ScoreStyle
    
}