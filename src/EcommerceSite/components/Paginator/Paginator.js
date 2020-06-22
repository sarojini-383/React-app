import React from 'react';
import {observer} from 'mobx-react'
import  { MdNavigateBefore,MdNavigateNext }  from 'react-icons/md';
import {PaginatorContainer,CurrentPage,TotalPages,LeftArrow,RightArrow} from './styledComponent';


@observer
class Paginator extends React.Component{
 
 render(){
     const {paginaterStore}=this.props;
     const {navigateToPreviousPage,navigateToNextPage,currentPage,limit,total}=paginaterStore;
     const totalPages=Math.ceil(total/limit)

     return <PaginatorContainer>
     <LeftArrow disabled={currentPage>1?false:true} onClick={navigateToPreviousPage}><MdNavigateBefore /></LeftArrow>
     <CurrentPage>{currentPage}</CurrentPage>
     <TotalPages>/{totalPages}</TotalPages>
     <RightArrow disabled={currentPage<totalPages?false:true} onClick={navigateToNextPage} ><MdNavigateNext  /></RightArrow>
     </PaginatorContainer>
 }   
    
}

export default Paginator;