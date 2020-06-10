/*global fetch*/
import { observable,action ,computed} from 'mobx'
import CartModel from '../../models/CartModel'



class CartStore{
@observable cartProductList
@observable productStore
  
  constructor(productStore){
   this.productStore=productStore;
   this.init()
  }
  
  @action
  init(){
   this.cartProductList=[]
  }
  
  @action
  clearStore(){
   this.init()
  }
 
 @action.bound
 onClickAddToCart(product){
  
  
  const cartModel=new CartModel(product)

  let cartItem= this.cartProductList.find(item=>item.productId===product.productId )
   if(cartItem){
    cartItem.incrementQuantity();
   }
  else{
   this.cartProductList.push(cartModel)
  }
 }


@action.bound
onRemoveCartItem(id){
 
  let index=this.cartProductList.findIndex(cell=>cell.productId===id);
  
  let a=this.cartProductList
  a.splice(index,1);
  this.cartProductList=a;
}


@computed get totalCartAmount(){

 let s=0
   this.cartProductList.map(item=> 
   {
   s+=item.cartDetails.price * item.quantity

   }
   )
   return s;
}


@computed get noOfProductsInCart(){
 return this.cartProductList.length
}



}

export default CartStore;