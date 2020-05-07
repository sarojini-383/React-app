import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'
import {action} from 'mobx'
import { withRouter } from 'react-router-dom';

import LoadingWrapperWithFailure  from '../../../components/common/LoadingWrapperWithFailure/index.js'
import NoDataView  from '../../../components/common/NoDataView/index.js'

import ProductsPage from '../../components/ProductsPage/ProductsPage.js'


@inject('productStore','cartStore','authStore')
@observer
class ProductsPageRoute extends Component{
  
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
      this.props.authStore.userSignOut(); 
      let { history } = this.props;
          history.push(`/ECommerse`);
  }
    render(){
        
        
     const productsCount=this.getStore().totalNoOfProductsDisplayed
     const onSelectSortBy=this.getStore().onChangeSortBy;
     const onSelectSize=this.getStore().onSelectSize;
     const onClickAddToCart=this.getCartStore().onClickAddToCart;
     const productList=this.getStore().sortedAndFilteredProducts;
     const cartProductList=this.getCartStore().cartProductList;
     const getProductDetailsById=this.getCartStore().getProductDetailsById;
     const onClickSignOut=this.onClickSignOut;
     const cartStore=this.getCartStore();
     const productStore=this.getStore();
     
      return  (<ProductsPage 
          productsCount={productsCount}
          onSelectSortBy={onSelectSortBy}
          onSelectSize={onSelectSize}
          onClickAddToCart={onClickAddToCart}
          productList={productList}
          cartProductList={cartProductList}
          onClickSignOut={onClickSignOut}
          cartStore={cartStore}
          productStore={productStore}
        />);

    }
}

export default ProductsPageRoute;