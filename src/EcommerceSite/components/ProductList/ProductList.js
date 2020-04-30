import React,{Component} from 'react';
import {observer} from 'mobx-react'
import Product from '../Product';
import {
     ProductListContainer
} from './styledComponent';


@observer
class ProductList extends React.Component{
    
    render(){
      let { products,onClickAddToCart }=this.props;
    
     return  <ProductListContainer> {products.map(product=> <Product key={product.productId} 
     product={product} onClickAddToCart={onClickAddToCart}/>)
         }</ProductListContainer>
    }
}

export default ProductList