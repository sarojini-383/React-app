import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const SizeFilterContainer=styled.div`
${tw` 
align-baseline
`}`;


const SizeFilters=styled.div`
${tw` 
flex
align-baseline
flex-wrap
`}`;

const Size=styled.button`
${tw` 
border
w-10
h-10
m-2
p-1
hover:bg-black
hover:text-white
text-center
bg-gray-200
rounded-full
text-black
`}`;


export {SizeFilterContainer,SizeFilters,Size}