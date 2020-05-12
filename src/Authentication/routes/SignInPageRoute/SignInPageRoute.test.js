/*global expect*/
/*global jest*/


import React from 'react'
import {render,fireEvent,waitFor} from '@testing-library/react';
import {Router,withRouter,Route} from 'react-router-dom'
import { createMemoryHistory } from 'history';
import {Provider} from 'mobx-react'
import AuthStore from '../../AuthStores/AuthStore'
import AuthService from '../../services/AuthService'
import {
  SIGN_IN_PATH,
  PRODUCTS_PAGE } from '../../constants';
  
import SignInPageRoute from './SignInPageRoute'

import getUsersResponse from '../../fixtures/getUsersResponse'

const LocationDisplay=withRouter((location)=>{
  <div data-testid="location-display" >{location.pathname}</div>
})

describe("SignInPageRoute Tests",()=>{
    let authAPI;
    let authStore;
        
        
    beforeEach(()=>{
      authAPI=new  AuthService();
      authStore=new AuthStore(authAPI);
    })
    
    it("should render empty error message",()=>{
        const {getByText,getByRole}=render(
        <Router history={createMemoryHistory()} >
          <SignInPageRoute authStore={authStore} />
        </Router>
    );
    const signInButton=getByRole("button",{name:'Sign in'})
    fireEvent.click(signInButton)
    getByText(/Please enter Username/i);
    })
    
    it("should render empty password message",()=>{
        const {getByText,getByRole,getByPlaceholderText}=render(
        <Router history={createMemoryHistory()} >
          <SignInPageRoute authStore={authStore} />
        </Router>)
        const signInButton=getByRole("button",{name:'Sign in'})
        const username="test-user"
        const usernameField = getByPlaceholderText('Username')
            fireEvent.change(usernameField,{target :{value:username}});
            fireEvent.click(signInButton)
            getByText(/Please enter Password/i);
    })
    
    it("should should render SignInPageRoute loading state ",async ()=>{
      const {getByRole,getByPlaceholderText,getByLabelText}=render(
        <Router history={createMemoryHistory()} >
          <SignInPageRoute authStore={authStore} />
        </Router>)
        
        const mockSuccessPromise=new Promise(function(resolve,reject){})
        const mockSignInAPI=jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        authAPI.signInAPI=mockSignInAPI;
    
    
        const signInButton=getByRole("button",{name:'Sign in'})
        const username="test-username"
        const password="test-password"
        const usernameField = getByPlaceholderText('Username')
        const passwordField =getByPlaceholderText('Password')
            fireEvent.change(usernameField,{target :{value:username}});
            fireEvent.change(passwordField,{target:{value:password}});
            fireEvent.click(signInButton)
            
            //getByRole("button", { disabled: true });
    })
    
    
  /*it("should render SignInPageRoute success state",async ()=>{
    
    const username="test-user"
    const password="test-password"
      
      
    const  history=createMemoryHistory()
    
    const route=SIGN_IN_PATH;
    history.push(route);
    
    console.log(history.location.pathname)
    
    
    const {
      getByPlaceholderText,
      getByRole,
      queryByRole,
      
      debug,
      getByTestId
    }=render(<Provider authStore={authStore}>
      <Router history={history}>
      
      <Route path={SIGN_IN_PATH} >  
          <SignInPageRoute  />
      </Route>
        <Route path={PRODUCTS_PAGE} >
          <LocationDisplay />
        </Route>
        
      </Router>
      </Provider>
      );
      
      
      
      const usernameField=getByPlaceholderText('Username');
      const passwordField=getByPlaceholderText('Password');
      const signInButton=getByRole("button",{name:'Sign in'})
    
    const mockSuccessPromise = new Promise(function(resolve, reject) {
      resolve(getUsersResponse);
    });
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockSuccessPromise);
    authAPI.signInAPI = mockSignInAPI;
    
    
      fireEvent.change(usernameField,{target :{value:username}});
      fireEvent.change(passwordField,{target:{value:password}});
      fireEvent.click(signInButton)
            
    await waitFor(() => {
      expect(
        queryByRole("button", { name: "Sign in" })
      ).not.toBeInTheDocument();
      debug()
      expect(getByTestId("location-display")).toHaveTextContent(
        PRODUCTS_PAGE
      );
    });

  });
*/
});
