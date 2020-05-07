import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const ProductPageContainer=styled.div`
${tw` 
flex 
flex-col
bg-white
`}`;


const SignOutBtn=styled.div`
${tw` 
border
rounded-md
text-center
w-24
h-8
m-8
border-black
`}`;



export {ProductPageContainer,SignOutBtn}