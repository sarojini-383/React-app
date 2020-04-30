import React,{Component} from 'react';
import {action} from 'mobx';
import {observer} from 'mobx-react'

import {
    ProductCartContainer
} from './styledComponent'

@observer
class ProductSort extends React.Component{
    
    
    @action.bound
    onSelectSortBy(event){
        const { onSelectSortBy } =this.props;
        onSelectSortBy(event.target.value);
    }
    render(){
       
        return <ProductCartContainer>Sort Price by:<select className="reg" onChange={this.onSelectSortBy}>
                    <option value="Select" >Select</option>
                    <option value="LowestToHighest" >Lowest to highest</option>
                    <option value="HighestToLowest" >Highest to lowest</option>
         </select></ProductCartContainer>
    }
}

export default ProductSort;