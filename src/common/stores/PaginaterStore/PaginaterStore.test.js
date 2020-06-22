/*global expect,jest*/


import {
    API_INITIAL,
    API_FAILED,
    API_FETCHING,
    API_SUCCESS
} from '@ib/api-constants';


import getUsersResponse from '../../../EcommerceSite/fixtures/getUsersResponse.json'

import ProductService from '../../../EcommerceSite/services/ProductService'
import PaginaterStore from './PaginaterStore'

describe("PaginationStore Tests",()=>{
    let paginaterStore
    let productsAPI
    
    beforeEach(()=>{
        productsAPI=new ProductService()
        paginaterStore=new PaginaterStore(productsAPI);
    })
    
    it("should test loading state of PaginationStore",()=>{
        expect(paginaterStore.getItemsListAPIStatus).toBe(API_INITIAL);
        expect(paginaterStore.getItemsListAPIError).toBe(null);
        
    })
    
    it("should test productsAPI fetching state",async()=>{
        //const mockFunction=jest.fn();
       let limit=3;
       let offset=0;
        //expect(mockFunction).toBeCalledWith(limit, offset)
        const mockLoadingPromise=new Promise(function(resolve,reject){limit,offset})
        const mockEntityAPI=jest.fn();
      //  expect(mockEntityAPI).toBeCalledWith(limit, offset)
        mockEntityAPI.mockReturnValue(mockLoadingPromise);
       
        
      // await paginaterStore.getItems();
      //   expect(paginaterStore.getItemsListAPIStatus).toBe(API_FETCHING); 
        expect(paginaterStore.itemsList.length).toBe(0); 
    })
    
    it("should test productsAPI success state",async()=>{
        let limit=3;
       let offset=0;
        //expect(mockFunction).toBeCalledWith(limit, offset)
        const mockLoadingPromise=new Promise(function(resolve,reject){
            resolve(getUsersResponse)
            
        })
        const mockEntityAPI=jest.fn();
      //  expect(mockEntityAPI).toBeCalledWith(limit, offset)
        mockEntityAPI.mockReturnValue(mockLoadingPromise);
        paginaterStore.itemsService=mockEntityAPI
       
       
           expect(paginaterStore.itemsList.length).toBe(3); 
    })

  /*  it("should test productsAPI failure state",async ()=>{
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
        expect(productStore.sortBy).toBe('DESCENDING')
        
        productStore.onChangeSortBy('LowestToHighest');
        expect(productStore.sortBy).toBe('ASCENDING')
        
        productStore.onChangeSortBy('All');
        expect(productStore.sortBy).toBe('ALL')
        

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
  */
});   
    
   