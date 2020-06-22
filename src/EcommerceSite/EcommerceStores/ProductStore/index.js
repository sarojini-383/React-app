import ProductService from '../../services/ProductService/ProductService.js'
import ProductStore from './ProductStore'
import PaginaterStore from '../../../common/stores/PaginaterStore/PaginaterStore'

const productStore=new ProductStore(new ProductService(),PaginaterStore)


//const productService= new ProductService();

//  paginaterStore =new PaginaterStore(
//     productService.getProductsAPI,
//     new ProductStore().limit,
//     new ProductStore().total,
    
//     )
    


///import ProductStore from './ProductStore'
export default ProductStore;