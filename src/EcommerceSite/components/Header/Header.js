import React,{Component} from 'react';
import SizeFilter from '../SizeFilter';
import ProductSort from '../ProductSort';
import {observer} from 'mobx-react'

import {
    HeaderContainer,
    ProductsCount,
} from './styledComponent';

@observer
class Header extends React.Component{
    
    render(){
        const {productsCount,onSelectSortBy,onSelectSize}=this.props;
        return <HeaderContainer style={{display:'flex'}}>
        <SizeFilter onSelectSize={onSelectSize}/>
        <ProductsCount>{productsCount} Product(s)Found</ProductsCount>
        <ProductSort onSelectSortBy={onSelectSortBy}/>    
        </HeaderContainer>
    }
}

export default Header;