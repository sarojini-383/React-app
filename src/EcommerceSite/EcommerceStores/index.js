

import ProductService from '../services/ProductService'
import ProductStore from './ProductStore'
import CartStore from './CartStore'
import PaginaterStore from '../../common/stores/PaginaterStore/PaginaterStore'

const productStore=new ProductStore(new ProductService(),PaginaterStore)
const cartStore=new CartStore(productStore)

export default{
    productStore,
    cartStore
}