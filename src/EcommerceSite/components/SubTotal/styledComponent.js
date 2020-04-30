import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const SubTotalBlock=styled.div`
${tw` 
flex 
justify-between
`}`;

const Amount=styled.div`
${tw`text-yellow-500
text-lg
`}`;

const Txt=styled.div`
${tw`text-lg
text-gray-500`}`;




export {SubTotalBlock,Txt,
    Amount}