/*global expect,jest*/

import ProductService from '../../services/ProductService'
import ProductStore from '../../EcommerceStores/ProductStore'
import CartStore from '../../EcommerceStores/CartStore'

describe("cartStore Tests",()=>{
 let productsAPI;
 let productStore;
 let cartStore;
    
 beforeEach(()=>{
   productsAPI=new ProductService();
   productStore=new ProductStore(productsAPI);
   cartStore=new CartStore(productStore)    
 })
 
 it("should test clearStore",()=>{
     cartStore.clearStore();
     let mockCartProductList=cartStore.cartProductList;
     expect(mockCartProductList.length).toBe(0)
 })
 
 it("should test onClickAddToCart",()=>{
  cartStore.cartProductList=[
   {productId:1,name:'plain-shirt',price:2000,availableSizes:['X','XS'],quantity:1},
   {productId:2,name:'check-shirt',price:1000,availableSizes:['S','X'],quantity:1}
   ];
  
  let mockProduct={productId:3,name:'plain-shirt',price:2000,availableSizes:['X','XS'],quantity:1};
  cartStore.onClickAddToCart(mockProduct);
  let mockCartItem=null;
  let mockCartProductList=cartStore.cartProductList 
  let mockNoOfProductsInCart=cartStore.noOfProductsInCart;
  expect(mockCartProductList.length).toBe(3)
  //expect(mockNoOfProductsInCart).toEqual(3)
  
  mockProduct={productId:1,name:'plain-shirt',price:2000,availableSizes:['X','XS'],quantity:1};
  mockCartItem=mockProduct;
  mockCartItem.incrementQuantity;
  mockCartProductList=cartStore.cartProductList 
  expect(mockCartProductList.length).toBe(3)
 })
 

it("should test onRemoveCartItem",()=>{
 cartStore.cartProductList=[
   {productId:1,name:'plain-shirt',price:2000,availableSizes:['X','XS'],quantity:1},
   {productId:2,name:'check-shirt',price:1000,availableSizes:['S','X'],quantity:1}
   ];
   
 let mockId=1;
 cartStore.onRemoveCartItem(mockId);
 let mockCartProductList=cartStore.cartProductList 
 expect(mockCartProductList.length).toBe(1)
}) 
// computed get totalCartAmount(){
 
//  let s=0
//    this.cartProductList.map(item=> 
//    {
//    let a=item.cartDetails.price * item.quantity
//    s+=a;
//    }
//    )
//    return s;
// }

// it("should test totalCartAmount",()=>{
//  let mockProducts=cartStore.cartProductList=[
//    {productId:1,name:'plain-shirt',price:2000,availableSizes:['X','XS'],quantity:1},
//    {productId:2,name:'check-shirt',price:1000,availableSizes:['S','X'],quantity:1}
//    ];
//   let mockAmount=cartStore.totalCartAmount;
  
//   let mockProduct={productId:1,name:'plain-shirt',price:2000,availableSizes:['X','XS'],quantity:1};
  
  
  
//   let mockTotal=mockProduct.price*mockProducts[0].quantity;
//   expect(mockAmount).toBe(3000)
   
   
// })

})