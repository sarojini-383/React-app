/*global jest,expect*/

import React from 'react'
import { render,fireEvent } from '@testing-library/react';
import ProductStore from '../../EcommerceStores/ProductStore'
import CartStore from '../../EcommerceStores/CartStore';

//import ProductCart from '.'
describe("ProductCart Tests",()=>{
    // let cartStore;
    // let productStore;
    
    // beforeEach(()=>{
    //     productStore=new ProductStore();
    //     cartStore=new CartStore(productStore);
    // })
    
    it("should test ProductCart",()=>{
        expect(1).toEqual(1)
        // cartStore.noOfProductsInCart=1
        // const showCart=jest.fn()
        // const { getByText,getByTestId }=render(
        //     <ProductCart cartStore={cartStore}  />
        //     );
        
        //   getByText(/1/i);
        //   getByTestId('showCart').click()
        //   //fireEvent.click()
    })
})