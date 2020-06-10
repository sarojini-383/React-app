import React from 'react';
import {observer} from 'mobx-react'
import  { MdNavigateBefore,MdNavigateNext }  from 'react-icons/md';
import {PaginatorContainer,CurrentPage,TotalPages,LeftArrow,RightArrow} from './styledComponent';


@observer
class Paginator extends React.Component{
 
 render(){
     const {productStore}=this.props;
     const {navigateToPreviousPage,navigateToNextPage,currentPage,limit,totalProducts}=productStore;
     const totalPages=Math.ceil(totalProducts/limit)

     return <PaginatorContainer>
     <LeftArrow disabled={currentPage>1?false:true} onClick={navigateToPreviousPage}><MdNavigateBefore /></LeftArrow>
     <CurrentPage>{currentPage}</CurrentPage>
     <TotalPages>/{totalPages}</TotalPages>
     <RightArrow disabled={currentPage<totalPages?false:true} onClick={navigateToNextPage} ><MdNavigateNext  /></RightArrow>
     </PaginatorContainer>
 }   
    
}

export default Paginator;