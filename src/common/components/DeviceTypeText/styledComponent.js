import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ViewEditToggleContainer=styled.div`${
    tw`flex flex-col justify-center items-center bg-gray-300 p-4`
}`
const Title=styled.div`${tw`font-bold text-xl`
    }`
 
const UserBlock=styled.div`${
    tw`flex`
}`  

const ShoppingList=styled.div`${
    tw`m-4`
}`
const EditBtn=styled.div`${
    tw`w-24 bg-blue-900 m-4`
}`
export {
    ViewEditToggleContainer,
    Title,
    UserBlock,
ShoppingList,
    EditBtn
}