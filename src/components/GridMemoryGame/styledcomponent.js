import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const GridGameContainer=styled.div`${tw ` flex flex-col`}
width:${props=>props.width}`;

const Main=styled.div`${tw ` flex flex-col w-screen h-screen justify-center items-center p-20`}
background-color:${props=>props.theme==="Light"?'#fff':' #2a4365'};
color:${props=>props.theme==="Light"?'black':'white'};
`;

const GridGameHeader=styled.div`${tw ` flex content-center  justify-between m-3`}
width:${props=>props.width}`;

const GridsField=styled.div`${tw `flex flex-wrap`}
width:${props=>props.width}`;

//const ThemeStyle=styled.div`${tw`p-1 border`}`;
const ThemeStyle=styled.div`${tw`p-1 border  text-base self-center`}`;

const CellStyle=styled.button`${tw `m-1 flex-grow` }
background-color:${props=> props.color};
color:${props=>props.theme==="Light"?'black':'white'};
width:${props=>props.width};
height:${props=>props.height};
`;

const GameResultContainer=styled.div`${tw `flex flex-col w-screen h-screen content-center`}
`;

const WishTxtStyle=styled.div`${tw `text-green-600 text-3xl text-center flex-grow m-4`}`;

const LevelStyle=styled.div`${tw `text-black-900 text-2xl text-center `}`;

const PlayAgainButtonStyle=styled.div`${tw `p-2 bg-indigo-600 rounded-md text-white text-base self-center `}`;

export {GridGameContainer,GridsField,GridGameHeader,ThemeStyle,CellStyle,GameResultContainer,WishTxtStyle,LevelStyle,PlayAgainButtonStyle,Main};