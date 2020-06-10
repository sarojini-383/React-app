import React from 'react';
import  { MdNavigateBefore,MdNavigateNext }  from 'react-icons/md';
import {PaginatorContainer,CurrentPage,TotalPages,LeftArrow,RightArrow} from './styledComponent';

class Paginator extends React.Component{
 
 render(){
     return <PaginatorContainer>
     <LeftArrow><MdNavigateBefore /></LeftArrow>
     <CurrentPage>1</CurrentPage>
     <TotalPages>/6</TotalPages>
     <RightArrow><MdNavigateNext  /></RightArrow>
     </PaginatorContainer>
 }   
    
}

export default Paginator;