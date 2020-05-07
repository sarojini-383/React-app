import React from 'react'

import {Route} from 'react-router-dom';

import SignInPageRoute from './SignInPageRoute'

import ProductsPageRoute from '../../EcommerceSite/routes/ProductsPageRoute/ProductsPageRoute.js'

import {
    SIGN_IN_PATH,
    PRODUCTS_PAGE } from '../constants'
    
const routes=[
   <Route key={Math.random()} path={SIGN_IN_PATH} component={SignInPageRoute} /> ,
   <Route key={Math.random()} path={PRODUCTS_PAGE} component={ProductsPageRoute} /> ,
    ];
    
export default routes;