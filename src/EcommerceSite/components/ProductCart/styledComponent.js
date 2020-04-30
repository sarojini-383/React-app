import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ProductCartContainer=styled.div`
${tw`flex flex-col pb-10 `}
`
const Cart=styled.div`
${tw`flex bg-blue-900  mt-0 p-1 
border-b border-white text-white justify-center items-center`}

`
const CartTxt=styled.div`
${tw`text-white text-lg font-bold mr-auto`}
`

const CartContainer=styled.div`
${tw` 
flex 
flex-col
top-0
right-0
fixed
bg-blue-900
text-white
px-4
w-2/5
h-screen
`};

`

const AddItemsTxt=styled.div`
${tw`text-white 
text-sm
mt-32
text-center
font-semibold`}`;



const Footer=styled.div`
${tw` 
flex flex-col`}`;

const CartItemsCount=styled.div`
${tw` 
text-yellow-500 text-lg absolute`}`;

const CheckOutBtn=styled.div`
${tw`p-2 
w-20
bg-black
m-2
`}`;

const RemoveBtn=styled.div`
${tw`
text-white
text-lg font-bold
mr-auto
`}`;



export {
    
    ProductCartContainer,
    Cart,
    CartTxt,
    CartContainer,
    AddItemsTxt,
    Footer,
    CartItemsCount,
    CheckOutBtn,RemoveBtn}