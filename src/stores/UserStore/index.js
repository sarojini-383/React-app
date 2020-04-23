/*global fetch*/
import { observable,action } from 'mobx'
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'

//import {create} from 'apisauce'
//import {networkCallWithApisauce} from'../../utils/APIUtils'
//import {apiMethods} from '../../constants/APIConstants'

//import UserService from '../../services/UserService/index.fixture'

import{ 
    API_INITIAL,
    API_FETCHING,
    API_SUCCESS,
    API_FAILED } from '@ib/api-constants'


class UserStore{
 @observable getUsersApiStatus
 @observable getUsersApiError
 @observable users
 userService
  
  constructor(userService){
      this.userService=userService
      this.init()
  }
  
  @action
  init(){
      this.getUsersApiStatus=API_INITIAL
      this.getUsersApiError=null
      this.users=[]
  }
  @action
  clearStore(){
      this.init()
  }
  
  
  @action.bound
  setUsersAPIResponse(users){
      this.users=users.map((user)=>user.name);
         //  this.getUsersApiStatus=API_SUCCESS;
  }
  
  @action.bound
  setUsersAPIError(error){
      this.getUsersApiError=error;
     // this.getUsersApiStatus=API_FAILED;
  }
    
  @action.bound
  setUsersAPIStatus(apiStatus){
     this.getUsersApiStatus=apiStatus 
  }
  
  @action.bound
  getUsers(){
   const usersPromise=this.userService.getUsers();
      // const api=create({
      //     baseURL:'https://jsonplaceholder.typicode.com/'
      // })
      
      // const usersPromise=networkCallWithApisauce(
      //     api,
      //     'users/',
      //     {},
      //     apiMethods.get
      //     )
     //const usersPromise=fetch('https://jsonplaceholder.typicode.com/users')
     return bindPromiseWithOnSuccess(usersPromise)
     .to(this.setUsersAPIStatus,this.setUsersAPIResponse)
     .catch(this.setUsersAPIError)
    
   /* this.getUsersApiStatus=API_FETCHING;
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(this.setUsersAPIResponse)
    .catch(this.setUsersAPIError)*/
  }
}

//const userService =new UserService()

//const userStore=new UserStore(this.userService);
//userStore.getUsers();
export default UserStore;