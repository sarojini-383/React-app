/*global fetch*/
import { observable,action ,computed} from 'mobx'
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import ProductModel from '../../models/ProductModel'


import{ 
    API_INITIAL,
    API_FETCHING,
    API_SUCCESS,
    API_FAILED } from '@ib/api-constants'


class ProductStore{
 @observable getProductListAPIStatus
 @observable getProductListAPIError
 @observable productList
 @observable sizeFilter
 @observable sortBy
 @observable limit
 @observable offset
 @observable currentPage
 @observable totalProducts
 
 productService
 paginaterStore
  
  constructor(productService,PaginaterStore){
      this.init()
      this.productService=productService;
      this.paginaterStore=new PaginaterStore(
       productService.getProductsAPI,
       ProductModel,
       this.limit
       );
     
  }
  
  @action
  init(){
   
      this.getProductListAPIStatus=API_INITIAL
      this.getProductListAPIError=null
      this.productList=[]
      this.sortBy='SELECT'
      this.sizeFilter=[]
      this.limit=3
      this.offset=0
      this.currentPage=1
     
  }
  @action
  clearStore(){
      this.init()
  }

  @action.bound
  getProductList(){
       const productsPromise=this.paginaterStore.getItems();
       this.productList=observable(this.paginaterStore.itemsList);
  }
  
  @computed 
 get products(){
    if(this.sortBy==='DESCENDING'){
      let sortedproductList=this.productList.slice().sort((a,b)=>a.price < b.price?1:-1);
      return sortedproductList;
    }
    else if(this.sortBy==="ASCENDING"){
      let sortedproductList=this.productList.slice().sort((a,b)=>a.price > b.price?1:-1);
      return sortedproductList;
    }
    else{
      return this.productList;
    }
  }
  
  @computed
  get sortedAndFilteredProducts(){
  
  if(this.sizeFilter.length===0){
   return this.products;
  }
  
  else{
  let b=[];
   for (let i=0; i<this.products.length;i++){
        for(let k=0;k<this.sizeFilter.length;k++){                                       
            for (let j=0;j<this.products[i].availableSizes.length;j++){
                if(this.products[i].availableSizes[j]===this.sizeFilter[k]){
                  if(b.indexOf(this.products[i])===-1){
                  b.push(this.products[i]);
                  break;
                    }
                } 
             }
      
           }
         }
     return b;
     }
   }
  
  
 @computed
 get totalNoOfProductsDisplayed(){
   return this.sortedAndFilteredProducts.length;
  }
  
  @action.bound
  onChangeSortBy(selectedSort){
   
   if (selectedSort ==='HighestToLowest'){
     this.sortBy="DESCENDING";
   }
   else if(selectedSort ==='LowestToHighest'){
     this.sortBy="ASCENDING"
   }
   else{
    this.sortBy="ALL"
   }
  }
  
  @action.bound
  onSelectSize(selectedSize){
  if(this.sizeFilter.indexOf(selectedSize)===-1){
   this.sizeFilter.push(selectedSize);
  }
  else{
   this.sizeFilter.remove(selectedSize);
  }
  }
  
  @action.bound
  navigateToPreviousPage(){
   this.offset-=3;
   this.productList=[]
   this.getProductList();
   this.currentPage--;
  }
  
  @action.bound
  navigateToNextPage(){
   this.offset+=3;
   this.productList=[]
   this.getProductList();
   this.currentPage++;
}
}

export default ProductStore;