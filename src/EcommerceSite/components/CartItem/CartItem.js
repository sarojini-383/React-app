import React,{Component} from 'react'
import {action} from 'mobx';
import {observer} from 'mobx-react'
import {
    CartItemContainer,
    CartProductImage,
    ProductInfoSec,
    CartProductTitle,
    CartProductInfo,
    CartProductPrice,
    RemoveBtn
    
} from './styledComponent'

@observer
class CartItem extends React.Component{
    
    
    @action.bound
    onRemoveCartItem(productId){
        
        const {cartStore}=this.props;
         cartStore.onRemoveCartItem(productId) 
    }
    
        @action.bound
    getProductDetailsById(){
        
    }
    render(){

        const {cartItem,cartStore}=this.props;
        const {cartDetails,quantity}=cartItem
        const {imageURL,title,printStyle,price,productId}=cartDetails;

        return <CartItemContainer>
         
            <CartProductImage src={imageURL} ></CartProductImage>

            <ProductInfoSec>
            <CartProductTitle>{title}</CartProductTitle>
            <CartProductInfo>{printStyle}</CartProductInfo>
            <CartProductInfo>Quantity:{cartItem.quantity}</CartProductInfo>
            </ProductInfoSec>
            
            <ProductInfoSec>
            <RemoveBtn onClick={()=>this.onRemoveCartItem(productId)}>x</RemoveBtn>
            <CartProductPrice> <span>&#8377;</span>{price}</CartProductPrice>

            </ProductInfoSec>
           </CartItemContainer>
    }
}

export default CartItem;



