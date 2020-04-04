import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EmojiCardsContainer=styled.div`
${tw `flex  flex-wrap justify-around`}
 `
 
const EmojiCardStyle=styled.div`
${tw `flex  flex-col justify-center items-center  w-1/3  `}
`
const NavbarStyle=styled.div`
${tw `flex justify-between`}
`
const NavbarChildStyle=styled.div`
${tw `flex justify-around items-baseline`}
`
const ThemeStyle=styled.div`
${tw ` border-1 border-gray-900 m-2`}
`
export {EmojiCardsContainer,EmojiCardStyle,NavbarStyle,NavbarChildStyle,ThemeStyle}