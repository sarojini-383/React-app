import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const CartItemContainer=styled.div`
${tw` 
flex 
justify-between
p-2
border-b border-white

`}`;

const CartProductImage=styled.img`
${tw` 
w-20
h-24
mr-2
`}`;


const ProductInfoSec=styled.div`
${tw` 
flex
flex-col
mr-4

`}`;

const CartProductTitle=styled.div`
${tw`
text-sm
text-white
`}
`
const CartProductInfo=styled.div`
${tw`
flex
flex-col
text-sm
text-gray-500
flex-wrap
`}`;


const CartProductPrice=styled.div`
${tw` 
text-lg
text-yellow-500
flex
justify-end
`}`;


const RemoveBtn=styled.div`
${tw` 
text-xl
text-white
text-black
flex
justify-end
`}`;
export {CartItemContainer,
    CartProductImage,
    ProductInfoSec,
    CartProductInfo,
    CartProductPrice,
    RemoveBtn,CartProductTitle}