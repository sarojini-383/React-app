import {action,observable} from 'mobx'
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import{ 
    API_INITIAL,
    API_FETCHING,
    API_SUCCESS,
    API_FAILED } from '@ib/api-constants'
    
class PaginaterStore{
@observable total
@observable limit
@observable offset
@observable itemsList
@observable getItemsListAPIStatus
@observable getItemsListAPIError
@observable currentPage
itemsService
itemModel


    
    constructor(service,model,limit){
       this.init(service,model,limit)
    }
    
    @action
    init(service,model,limit){
        this.itemsService=service
        this.limit=limit
        this.itemModel=model
        this.offset=0
        this.currentPage=1
        this.getItemsListAPIStatus=API_INITIAL
        this.getItemsListAPIError=null
        this.itemsList=[]
        this.total
    }
    
    
    @action.bound
  setItemsListResponse(response){
 
      this.total=response.total;
      response.products.map(product=>
      {const itemModel=new this.itemModel(product)
      this.itemsList.push(itemModel)})
    
   
  }
  
  @action.bound
  setItemsListAPIError(error){
      this.getItemsListAPIrror=error;
      console.log(error);
  }
    
  @action.bound
  setItemsListAPIStatus(apiStatus){
     this.getItemsListAPIStatus=apiStatus 
  }
    
    getItems(){
      
         const itemsPromise=this.itemsService(this.limit,this.offset);
        
      return bindPromiseWithOnSuccess(itemsPromise)
     .to(this.setItemsListAPIStatus,this.setItemsListResponse)
     .catch(this.setItemsListAPIError)
      
    
    }
    
    
    
    
   @action.bound
   navigateToPreviousPage(){
   
   this.offset-=3;
  this.itemsList=[]
   this.getItems();
   this.currentPage--;
  }
  
  @action.bound
  navigateToNextPage(){
   //alert("prodStore")
   //console.log("this.paginaterStore",this.paginaterStore)
   
  
   this.offset+=3;
   this.itemsList=[]
   this.getItems();
   this.currentPage++;
  // this.productService.getProductsAPI(this.limit,this.offset);
  }
}

export default PaginaterStore;