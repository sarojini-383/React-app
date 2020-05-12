/*global jest*/

import { render } from '@testing-library/react';
import React from 'react'
import ProductList from '.';


describe("ProductList Tests",()=>{
    
    it("should test render ProductList",()=>{
        const products=[{
        productId:1,
        title:"title1",
        imageURL:'imageURL',
        currencyFormat:'rupees',
        price:900,
        installmentsCount:9,
        isFreeShipping:true
        },
        {
        productId:2,
        title:"title2",
        imageURL:'imageURL',
        currencyFormat:'rupees',
        price:500,
        installmentsCount:5,
        isFreeShipping:false
            
        }]
        const onClickAddToCart=jest.fn()
         render(
            <ProductList products={products} onClickAddToCart={onClickAddToCart}/>
            );    
    })
    
})