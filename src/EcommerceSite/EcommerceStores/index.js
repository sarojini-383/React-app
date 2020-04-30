

import ProductService from '../services/ProductService/ProductService.js'

import ProductStore from './ProductStore/ProductStore.js'
import CartStore from './CartStore'

const productStore=new ProductStore(new ProductService())
const cartStore=new CartStore(productStore)
export default{
    productStore,
    cartStore
}