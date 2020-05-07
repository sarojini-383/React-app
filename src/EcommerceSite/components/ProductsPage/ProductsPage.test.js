/*global expect*/

import {
    API_INITIAL,
    API_FAILED,
    API_FETCHING,
    API_SUCCESS
} from '@ib/api-constants';


import ProductService from '../../services/ProductService'
import ProductStore from '../../EcommerceStores/ProductStore'

describe("ProductsPage Tests",()=>{
    let productsAPI;
    let productStore;
    
    beforeEach(()=>{
        productsAPI=new ProductService();
        productStore=new ProductStore(productsAPI);
    })
    
    it("should test loading state of products page",()=>{
        expect(productStore.getProductListAPIStatus).toBe(API_INITIAL);
        expect(productStore.getProductListAPIError).toBe(null);
    })
    
    
    
    
})