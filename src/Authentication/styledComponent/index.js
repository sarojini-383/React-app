import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const SignInPageContainer=styled.div`
${tw`bg-blue-100  flex flex-col border border-white content-center m-56 w-56`}`;

const UserInput=styled.input`
${tw`border border-solid border-grey-400 w-48 p-1 m-2 `}`

const Password=styled.input`
${tw`border border-solid border-grey-400 w-48 p-1 m-2 `}`

const SignInBtn=styled.button`
${tw`border rounded border-solid bg-black border-grey-400 w-48 p-2 m-2 text-white `}`

const SignInTxt=styled.div`${tw` text-start font-bold w-48 p-1 m-2`}`

const ErrorMsg=styled.div`${tw`text-start m-2 text-red-700 `}`

export {SignInPageContainer,UserInput,Password,SignInBtn,SignInTxt,ErrorMsg}