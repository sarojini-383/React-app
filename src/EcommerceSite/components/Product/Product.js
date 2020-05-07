import React,{Component} from 'react';
import { action } from 'mobx'
import {
    ProductContainer,
    ProductImage,
    ProductTitle,
    ProductPrice,
    ProductInstallment,
    AddToCartBtn,
    ProductFreeShipping,
    ProductInfoBlock
} from './styledComponent'


class Product extends React.Component{
    
    constructor(props){
        super(props);
        const { product }=this.props;
        
    }
    
    @action.bound
    onClickAddToCart(){
        const { onClickAddToCart,product } =this.props;
        onClickAddToCart(product);
    }
    
    render(){
      
      const { product }=this.props;
      const {imageURL,title,currencyFormat,price,installmentsCount,isFreeShipping}= product;
      const installmentValue = (price/installmentsCount).toFixed(2);
      
      
     return <ProductContainer>
            <ProductFreeShipping>{isFreeShipping?<div>isFreeShipping</div>:null}</ProductFreeShipping>
            <ProductImage  src={imageURL} ></ProductImage>
          
            <ProductTitle>{title}</ProductTitle>
            <b style={{width:'30px',color:' #d69e2e',flex:'1'}}>_</b>
            <ProductPrice>
            &#8377;{price}</ProductPrice>
            {installmentsCount>0? <ProductInstallment>or {installmentsCount}X&#8377;{installmentValue} </ProductInstallment>
            :null}
            <AddToCartBtn onClick={this.onClickAddToCart} >Add to Cart</AddToCartBtn>
     </ProductContainer>
    }
}

export default Product