import React,{Component} from 'react'
import {observer} from 'mobx-react'

import {
    CheckoutBtn
} from './styledComponent'

@observer
class CheckoutButton extends React.Component{

    clearCart=()=>{
        const {cartStore}=this.props;
        
        
        cartStore.clearStore();

        alert('Thank you for shopping with us 😊Your products will be delivered in 3 days tothe address mentioned in your profile.');
    }
    
    render(){
        
        return <CheckoutBtn onClick={this.clearCart}>CHECKOUT</CheckoutBtn>
    }
}

export default CheckoutButton;