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

const InputField=styled.input`${
    tw`w-auto m-4 border-none bg-gray-300  text-black`
}
hover:border-solid border-2 border-blue-600
`

const EditBtn=styled.div`${
    tw`px-2 py-1 border-2 rounded-md bg-blue-500 m-4 text-white `
}`
export {
    ViewEditToggleContainer,
    Title,
    UserBlock,
    InputField,
    EditBtn
}