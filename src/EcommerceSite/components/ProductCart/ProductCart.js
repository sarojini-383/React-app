import React,{Component} from 'react';
import { FiShoppingCart } from "react-icons/fi";
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import CartList from '../CartList';
import SubTotal from '../SubTotal';
import CheckoutButton from '../CheckoutButton';

import {
    ProductCartContainer,
   Cart,
   CartTxt,
    CartContainer,
    AddItemsTxt,
    Amount,
    RemoveBtn,
    Footer,
    CartItemsCount
    
} from './styledComponent'

@observer
class ProductCart extends React.Component{
@observable shouldDisplayCart

    constructor(props){
        super(props)
        this.init();
    }
    
    init=()=>{
        this.shouldDisplayCart=false;
    }

    showCart=()=>{
        this.shouldDisplayCart=true
    }
    
    hideCart=()=>{
        this.shouldDisplayCart=false
    }
    
    render(){
        const { cartStore } =this.props  
            return<ProductCartContainer> 
         <Cart><FiShoppingCart style={{width:'60px',height:'70px',color:'white',position:'relative' }} onClick={this.showCart}/>
         <CartItemsCount>{cartStore.noOfProductsInCart}</CartItemsCount>
         </Cart>
        <div>{this.shouldDisplayCart ? <CartContainer>

          <Cart>
                  <RemoveBtn onClick={this.hideCart}>x</RemoveBtn>
         <FiShoppingCart style={{width:'60px',height:'80px',color:'white' }} onClick={this.showCart}/>
         <CartItemsCount>{cartStore.noOfProductsInCart}</CartItemsCount>
         <CartTxt>Cart</CartTxt>
         
         </Cart>
      {cartStore.noOfProductsInCart ===0 ?<AddItemsTxt>Add some products in the cart</AddItemsTxt>:null}
       <CartList  cartStore={cartStore}/>
     
    <Footer>
    <SubTotal cartStore={cartStore}  />
    <CheckoutButton cartStore={cartStore} /></Footer>

            </CartContainer>:null}</div>
     </ProductCartContainer>
    }
}

export default ProductCart;



