import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const MouseCoordinatesContainer=styled.div`${
    tw`flex flex-col justify-center items-center bg-gray-300 p-4`
}`;
const UserBlock=styled.div`${
    tw`flex flex-col`
}`; 

const Txt=styled.div`${tw`text-lg`
    }`;
 


export {
    MouseCoordinatesContainer,
    UserBlock,
    Txt,
}