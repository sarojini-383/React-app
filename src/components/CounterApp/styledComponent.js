import styled from '@emotion/styled';
import tw from 'tailwind.macro';



const ButtonStyle=styled.div`
${tw `m-4 rounded-md bg-blue-800 w-16 h-16 text-3xl text-white`}`;

const CounterAppContainer=styled.div`
${tw `flex justify-center items-center flex-col`}` ;

const FooterStyle=styled.div`
${tw`flex`}` ;

const CounterTxtStyle=styled.div`
${tw `text-4xl`}` ;

const CountValue=styled.input`
${tw `text-4xl w-48 h-12 border-solid border-yellow-600`}` ;

export {CounterAppContainer,FooterStyle,ButtonStyle,CounterTxtStyle}