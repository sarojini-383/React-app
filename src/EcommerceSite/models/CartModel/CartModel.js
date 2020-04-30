import {observable,action} from 'mobx';



class CartModel{
@observable cartItemId
@observable productId
@observable quantity
cartProduct


    constructor(props){
        this.init(props)

    } 
    
 @action
 init(product){

    this.cartDetails=product;
    this.cartItemId=product.productId;
    this.productId=product.productId;
    this.quantity=1;
    
 }
 @action.bound
 incrementQuantity(){
     alert(this.quantity)
     this.quantity+=1;
 }   
 
}

export default CartModel;