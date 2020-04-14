import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EventTag=styled.div`
${tw `border  border-black m-2 `}`;

const EventAppContainer=styled.div`${tw `flex justify-around border border-black  p-3 m-3` }`
const Events=styled.div`${tw `flex flex-col `}`
const AddEventBtn=styled.div`${tw `border border-black self-center p-3`}`

const Editbutton=styled.div`${tw `border border-black `}`
const Delbutton=styled.div`${tw `border border-black `}`

const EventListStyle=styled.div`${tw `flex `}`
export {EventAppContainer,Events,EventTag,AddEventBtn,Editbutton,Delbutton,EventListStyle}