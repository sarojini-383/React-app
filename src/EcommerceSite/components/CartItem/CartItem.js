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
        alert('kim')
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



  /*      cartProductList: Array[3]
▶0: CartModel
▶cartDetails: ProductModel
 cartItemId: 12
 productId: 12
 quantity: 0
▶1: CartModel
▶2: CartModel
▶productStore: ProductStore
▶productService: ProductService
 getProductListAPIStatus: 200
 getProductListAPIError: null
▶productList: Array[16]
 sizeFilter: Array*/