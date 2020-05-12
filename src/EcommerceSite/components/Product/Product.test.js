/*global jest,expect*/
import {render,fireEvent} from '@testing-library/react';
import React from 'react'
import Product from '.'
import ProductStore from '../../EcommerceStores/ProductStore'

describe("should test Product" ,()=>{
    let productStore;
    
    beforeEach(()=>{
        productStore=new ProductStore();
    })
   it("should test each data of product", () => {
    const product={
        
        title:"title",
        imageURL:'imageURL',
        currencyFormat:'rupees',
        price:900,
        installmentsCount:9,
        isFreeShipping:true
    }
    const onClickAddToCart=jest.fn();
    const { getByText,getByRole,getByAltText} = render(
      <Product product={product} onClickAddToCart={onClickAddToCart}/>
    );
    const AddToCartBtn=getByRole("button",{name:'Add to Cart'})
    
    getByText(/title/i);
    getByAltText('ProductImage');
    getByText(/900/i);
    fireEvent.click(AddToCartBtn)
   });
   
    
})