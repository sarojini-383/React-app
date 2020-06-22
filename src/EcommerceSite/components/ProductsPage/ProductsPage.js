import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'
import {action} from 'mobx'
import { withRouter } from 'react-router-dom';

import LoadingWrapperWithFailure  from '../../../components/common/LoadingWrapperWithFailure/index'
import NoDataView  from '../../../components/common/NoDataView/index'

import ProductList from '../ProductList'
import Header from '../Header'

import ProductCart from '../ProductCart'
import Paginator from '../Paginator/Paginator.js'

import {
  ProductPageContainer,
  CartContainer,
  SignOutBtn
} from './styledComponent'


@observer
class ProductsPage extends Component{
  
  
  renderProductsList=observer(()=>{
    const {
      productsCount,
      onSelectSortBy,
      onSelectSize,
      onClickAddToCart,
      productList,
      cartProductList,
      getProductDetailsById,
      onClickSignOut,
      cartStore,
      productStore,
      paginaterStore
    }=this.props;
    
    console.log("productList",productList)
     
     return <div style={{display:'flex' ,flexDirection:'column' }}>
     <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'white'}}> 
     <SignOutBtn onClick={onClickSignOut} >Sign Out</SignOutBtn>
      <ProductCart cartStore={cartStore}/></div>
     <ProductPageContainer>
     <Header productsCount={productsCount} 
     onSelectSortBy={onSelectSortBy} onSelectSize={onSelectSize}/>
     <ProductList products={paginaterStore.itemsList}  onClickAddToCart={onClickAddToCart}/>
     <Paginator  paginaterStore={paginaterStore} />
     </ProductPageContainer>
     
    
      </div>
  })
    render(){
    
       const {getItemsListAPIStatus,getItemsListAPIError}=this.props.productStore.paginaterStore;
        
        return <LoadingWrapperWithFailure
        apiStatus={getItemsListAPIStatus}
        apiError={getItemsListAPIError}
        onRetryClick={this.doNetworkCalls}
        renderSuccessUI={this.renderProductsList}
        />

    }
}

export default ProductsPage;