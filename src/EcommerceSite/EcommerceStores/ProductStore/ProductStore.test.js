/*global expect,jest*/


import {
    API_INITIAL,
    API_FAILED,
    API_FETCHING,
    API_SUCCESS
} from '@ib/api-constants';



import ProductService from '../../services/ProductService'
import ProductStore from '../../EcommerceStores/ProductStore'

import getUsersResponse from '../../fixtures/getUsersResponse.json'


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
    
    it("should test productsAPI fetching state",()=>{
        const mockLoadingPromise=new Promise(function(resolve,reject){});
        const mockProductsAPI =jest.fn();
        mockProductsAPI.mockReturnValue(mockLoadingPromise);
        productsAPI.getProductsAPI=mockProductsAPI;
       
        productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toBe(API_FETCHING); 
    })
    
    it("should test productsAPI success state",async()=>{
        const mockSuccessPromise=new Promise(function(resolve,reject){
            resolve(getUsersResponse)
        });
        const mockProductsAPI =jest.fn();
        mockProductsAPI.mockReturnValue(mockSuccessPromise);
        productsAPI.getProductsAPI=mockProductsAPI;
       
            await productStore.getProductList();
            expect(productStore.getProductListAPIStatus).toBe(API_SUCCESS); 
    })

    it("should test productsAPI failure state",async ()=>{
        const mockFailurePromise=new Promise(function(resolve,reject){
            reject(new Error("error"))
        });
        const mockProductsAPI =jest.fn();
        mockProductsAPI.mockReturnValue(mockFailurePromise);
        productsAPI.getProductsAPI=mockProductsAPI;
         
         await productStore.getProductList();
         expect(productStore.getProductListAPIStatus).toBe(API_FAILED); 
         expect(productStore.getProductListAPIError).toBe("error"); 
    });
    
    it("should test onChangeSortBy",()=>{
        productStore.onChangeSortBy('HighestToLowest');
        expect(productStore.sortBy).toEqual('DESCENDING')
        
        productStore.onChangeSortBy('LowestToHighest');
        expect(productStore.sortBy).toEqual('ASCENDING')
        
        productStore.onChangeSortBy('All');
        expect(productStore.sortBy).toEqual('ALL')
        

    })
    

    
it("should test sortedAndFiltered ProductsList" ,()=>{
        productStore.productList=[{name:'plain-shirt',price:2000,availableSizes:['X','XS']},{name:'check-shirt',price:1000,availableSizes:['S','X']}]    
        productStore.sizeFilter=[];
        let mockProducts=productStore.products;
        let mockTotalNoOfProductsDisplayed=productStore.totalNoOfProductsDisplayed;
        let mockSortedAndFilteredList=productStore.sortedAndFilteredProducts;
        
        expect(mockSortedAndFilteredList.length).toBe(mockProducts.length)
        expect(mockTotalNoOfProductsDisplayed).toBe(mockSortedAndFilteredList.length)
        
        productStore.sortBy='ASCENDING';
        productStore.sizeFilter=['X'];
       
        mockProducts=productStore.products;
        expect(mockProducts[1].price).toBe(2000);
        
        mockSortedAndFilteredList=productStore.sortedAndFilteredProducts;
        expect(mockSortedAndFilteredList.length).toBe(2)
        
        productStore.sortBy='DESCENDING';
        productStore.sizeFilter=['S','XM'];
        mockProducts=productStore.products;
        expect(mockProducts[1].price).toBe(1000);
        
        mockSortedAndFilteredList=productStore.sortedAndFilteredProducts;
        expect(mockSortedAndFilteredList.length).toBe(1);
        
    })
    
    it("should test onSelectSize",()=>{
        let selectedSize='X';
        productStore.onSelectSize(selectedSize);
        expect(productStore.sizeFilter.length).toBe(1);
        
        let mockSlectedSizes=['X','XS'];
        productStore.onSelectSize(mockSlectedSizes);
        expect(productStore.sizeFilter.length).toBe(2);
    })
   
   it("should test clearStore",()=>{
       productStore.clearStore()
       let mockApiStatus=productStore.getProductListAPIStatus;
       expect(mockApiStatus).toBe(API_INITIAL)
        
  });
  
});   
    
   