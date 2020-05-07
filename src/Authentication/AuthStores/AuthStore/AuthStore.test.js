/*global expect*/
/*global jest*/

import {
    API_INITIAL,
    API_FAILED,
    API_FETCHING,
    API_SUCCESS
} from '@ib/api-constants';

import setCookie from '../../../utils/StorageUtils'

import AuthService from '../../services/AuthService';
import AuthStore from './AuthStore';

import getUsersResponse from '../../fixtures/getUsersResponse.json'

describe("AuthStore tests",()=>{
    
    let authAPI;
    let authStore;
    
        beforeEach(()=>{
            authAPI=new AuthService();
            authStore=new AuthStore(authAPI);
        
        });
        
    it("sholud test initialising auth store",()=>{
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBe(null);
    });
    
    
    it("should test userSignInAPI data fetching state",()=>{

    const mockLoadingPromise = new Promise(function(resolve, reject) {});
    const mockSignInAPI = jest.fn();
    
    mockSignInAPI.mockReturnValue(mockLoadingPromise);
    authAPI.signInAPI = mockSignInAPI;

    authStore.userSignIn();
    expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING);
    
        
    })
    
    it("should test userSignInAPI success state", async()=>{
        const mockSuccessPromise =new Promise(function(resolve,reject){
            resolve(getUsersResponse);
        });
        const mockSignInAPI=jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        authAPI.signInAPI = mockSignInAPI;
        
        await authStore.userSignIn();
        expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS);
        
    })
    
    
it("should test userSignInAPI FAILURE state", async()=>{
        const mockFailurePromise =new Promise(function(resolve,reject){
            reject(new Error("error"));
        });
        const mockSignInAPI=jest.fn();
        mockSignInAPI.mockReturnValue(mockFailurePromise);
        authAPI.signInAPI = mockSignInAPI;
        
        await authStore.userSignIn();
        expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED);
        expect(authStore.getUserSignInAPIError).toBe("error");
    })
    
    it("should test user signed-out",()=>{
        authStore.userSignOut();
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBe(null);
    })
    
});