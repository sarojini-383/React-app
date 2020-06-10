import React,{Component} from 'react';
import {observer} from 'mobx-react'
import CartItem from '../CartItem';
// import {
//      ProductListContainer
// } from './styledComponent';


@observer
class CartList extends React.Component{
    
    
    render(){

    const { cartStore }=this.props;
    const cartProductList=cartStore.cartProductList;
    

    return  <div style={{overflow:'auto',height:'60%'}}>
    {cartProductList.map(cartItem=><CartItem key={cartItem.productId} cartItem={cartItem} cartStore={cartStore }  /> )}</div>
    }
}
export default CartList