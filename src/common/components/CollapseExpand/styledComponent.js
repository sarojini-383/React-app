import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ViewEditToggleContainer=styled.div`${
    tw`flex flex-col justify-center items-center bg-gray-400 p-4`
}`
const Title=styled.div`${tw`font-bold text-xl`
    }`
 
const UserBlock=styled.div`${
    tw`flex items-baseline`
}`  
const ShoppingListTxt=styled.div`${
    tw`text-lg`
}`
const ShoppingList=styled.div`${
    tw`m-4`
}`
const EditBtn=styled.div`${
    tw`px-2 py-1 border-2 rounded-md bg-blue-500 m-4 text-white w-24 h-8`
}`
export {
    ViewEditToggleContainer,
    Title,
    UserBlock,
    ShoppingListTxt,
ShoppingList,
    EditBtn
}