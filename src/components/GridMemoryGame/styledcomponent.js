import styled from '@emotion/styled';
import tw from 'tailwind.macro';
// style={{display:'flex',flexWrap:'wrap', width:'300px'}}

const GridGameContainer=styled.div`
${tw ` self-center `}`



const GridGameHeader=styled.div`${tw ` flex w-5/12 justify-between`}`

const GridsField=styled.div`${tw `flex flex-wrap w-5/12 `}`

const ThemeStyle=styled.div`${tw` border-2`}`

export {GridGameContainer,GridsField,GridGameHeader,ThemeStyle}