import { observable,action } from 'mobx';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'

import {setAccessToken,clearUserSession} from '../../../utils/StorageUtils.js'

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
    authService
    constructor(authService){
        this.authService=authService;
        this.init();
    }
    
    @action
    init(){
        this.getUserSignInAPIStatus=API_INITIAL;
        this.getUserSignInAPIError=null
        this.authAPIService={}
    }
    
    @action.bound
    setUserSignInAPISatus(apiStatus){
        this.getUserSignInAPIStatus=apiStatus;
    }
    
    
    @action.bound
    setUserSignInAPIError(error){
        this.getUserSignInAPIError=error;
    }
    
    @action.bound
    setUserSignInAPIResponse(response){
        setAccessToken(response[0].access_token)
        /* Adds access token to the cookies */
    }
    
    
    
    
    @action.bound
    userSignIn(){
        
        const userSignInPromise=this.authService.signInAPI() 
        return (bindPromiseWithOnSuccess(userSignInPromise)
        .to(this.setUserSignInAPISatus,this.setUserSignInAPIResponse,)
        .catch(this.setUserSignInAPIError));
    }
    
    @action.bound
    userSignOut(){
        
        clearUserSession();
        this.init()
        /* Removes access token from cookies */
    }
    
}

export default AuthStore;