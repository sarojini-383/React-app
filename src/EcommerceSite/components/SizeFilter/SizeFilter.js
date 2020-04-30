import React,{Component} from 'react';
import {action} from 'mobx';
import {observer} from 'mobx-react'
import {
  SizeFilterContainer,
  SizeFilters,
  Size
} from './styledComponent'


@observer
class SizeFilter extends React.Component{
    
    
    @action.bound
    onSelectSize(event){
        
        const { onSelectSize } =this.props;
       
        onSelectSize(event.target.textContent)
        
    }
    render(){
        return <SizeFilterContainer>
        <b>Sizes:</b>
        <SizeFilters><Size isClicked={this.isClicked} onClick={(e)=>this.onSelectSize(e)}>XS</Size>
        <Size onClick={this.onSelectSize}>S</Size>
        <Size onClick={this.onSelectSize}>M</Size>
        <Size onClick={this.onSelectSize}>L</Size>
        <Size onClick={this.onSelectSize}>XL</Size>
        <Size onClick={this.onSelectSize}>XXL</Size></SizeFilters>
        </SizeFilterContainer>
    }
}

export default SizeFilter;