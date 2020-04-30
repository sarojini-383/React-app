import { observable,action } from 'mobx';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'

import {
   API_INITIAL,
   API_FAILED,
   API_FETCHING,
   API_SUCCESS,
} from '@ib/api-constants';

class AuthStore{
    
    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIError
    @observable authAPIService
    constructor(AuthService){
        this.init();
    }
    
    @action
    init(){
        this.getUserSignInAPIStatus=API_INITIAL;
        this.getUserSignInAPIError=null
    }
    
    @action.bound
    setGetUserSignInAPIError(apiStatus){
        this.getUserSignInAPIStatus=apiStatus;
    }
    
    
    @action.bound
    setGetUserSignInAPIError(error){
        this.getUserSignInAPIError=error;
    }
    
    @action.bound
    setUserSignInAPIResponse(response){
        /* Adds access token to the cookies */
        console.log("response",response)
    }
    
    
    
    
    @action.bound
    userSignIn(){
        alert('came')
        const userSignInPromise=this.AuthService.signInAPI() 
    
        return bindPromiseWithOnSuccess(userSignInPromise)
        .to(this.setUserSignInAPIStatus,this.setUserSignInAPIResponse,)
        .catch(this.setGetUserSignInAPIError)
    }
    
    @action.bound
    userSignOut(){
        /* Removes access token from cookies */
    }
    
}

export default AuthStore;