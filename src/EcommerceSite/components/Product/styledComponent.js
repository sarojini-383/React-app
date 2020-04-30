import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const ProductContainer=styled.div`
${tw` 
flex 
flex-col
justify-center
items-center
w-auto
h-auto
m-8
mt-auto
`}`;
const ProductInfoBlock=styled.div`
${tw` 
flex 
flex-col

`}`;
const ProductImage=styled.img`
${tw` 
w-48

`}`;

const ProductTitle=styled.div`
${tw` 
text-lg

`}`;

const ProductPrice=styled.div`
${tw` 
text-lg

`}`;

const ProductInstallment=styled.div`
${tw` 
text-lg
text-gray-700

`}`;

const AddToCartBtn=styled.button`
${tw`
p-2
text-white
bg-black
rounded
`}`

const ProductFreeShipping=styled.div`
${tw`
text-white
bg-black
ml-32

`}`

export {ProductContainer,ProductImage,ProductTitle,
    ProductPrice,ProductInstallment,AddToCartBtn,ProductFreeShipping,ProductInfoBlock}