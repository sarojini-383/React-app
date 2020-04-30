import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'
import {action} from 'mobx'
import { withRouter } from 'react-router-dom';

import LoadingWrapperWithFailure  from '../../../components/common/LoadingWrapperWithFailure/index.js'
import NoDataView  from '../../../components/common/NoDataView/index.js'

import ProductList from '../ProductList'
import Header from '../Header'

import ProductCart from '../ProductCart'
import {
  ProductPageContainer,
  CartContainer,
  SignOutBtn
} from './styledComponent'

@inject('productStore','cartStore')
@observer
class ProductsPage extends Component{
  
  componentDidMount(){
      this.doNetworkCalls()
  }  
  
  getStore=()=>{
    return this.props.productStore;
  }
  
  getCartStore(){
      return this.props.cartStore;
  }
  
  doNetworkCalls=()=>{
      this.getStore().getProductList()
  }
  
 componentWillUnmount(){
   this.props.productStore.clearStore();
   this.props.cartStore.clearStore(); 
 }
  
  
  onSelectSortBy=(event)=>{
    
  }
  onClickSignOut=()=>{
      let { history } = this.props;
          history.push(`/ECommerse`);
  }
  renderProductsList=observer(()=>{
    
     const productsCount=this.getStore().totalNoOfProductsDisplayed
     const onSelectSortBy=this.getStore().onChangeSortBy;
     const onSelectSize=this.getStore().onSelectSize;
     const onClickAddToCart=this.getCartStore().onClickAddToCart;
     const productList=this.getStore().sortedAndFilteredProducts;
     const cartProductList=this.getCartStore().cartProductList;
    
     const  getProductDetailsById=this.getCartStore().getProductDetailsById;
     
     return <div style={{display:'flex' ,flexDirection:'column' }}>
     <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'white'}}> 
     <SignOutBtn onClick={this.onClickSignOut} >Sign Out</SignOutBtn>
      <ProductCart cartStore={this.getCartStore()}/></div>
     <ProductPageContainer>
     <Header productsCount={productsCount} 
     onSelectSortBy={onSelectSortBy} onSelectSize={onSelectSize}/>
     <ProductList products={productList} onClickAddToCart={onClickAddToCart}/>
     </ProductPageContainer>
     
    
      </div>
  })
    render(){
        
        const {getProductListAPIStatus,getProductListAPIError,productList}=this.getStore();
        
        return <LoadingWrapperWithFailure
        apiStatus={getProductListAPIStatus}
        apiError={getProductListAPIError}
        onRetryClick={this.doNetworkCalls}
        renderSuccessUI={this.renderProductsList}
        />

    }
}

export default ProductsPage;