import styled from '@emotion/styled';
import tw from 'tailwind.macro';


let PaginatorContainer =styled.div`
${tw `flex align-baseline self-end`}
`

let CurrentPage =styled.div`
${tw `w-8 h-8 text-xl text-center  border border-black m-1`}
`

let TotalPages =styled.div`
${tw `w-8 text-xl h-8 text-center m-1`}
`
let LeftArrow=styled.button`
${tw `w-8 h-8 text-white text-xl text-center bg-gray-500 m-1`}
`

let RightArrow=styled.button`
${tw `w-8 h-8 text-white text-xl text-center bg-black m-1`}
`


export {PaginatorContainer,CurrentPage,TotalPages,RightArrow,LeftArrow}

