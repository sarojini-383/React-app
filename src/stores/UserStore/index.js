/*global fetch*/
import { observable,action } from 'mobx'
import{ 
    API_INITIAL,
    API_FETCHING,
    API_SUCCESS,
    API_FAILED } from '@ib/api-constants'

class UserStore{
 @observable getUsersApiStatus
 @observable getUsersApiError
 @observable users
 
  
  constructor(){
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
           this.getUsersApiStatus=API_SUCCESS;
  }
  
  @action.bound
  setUsersAPIError(error){
      this.getUsersApiError=error;
      this.getUsersApiStatus=API_FAILED;
  }
  
  @action.bound
  getUsers(){
    this.getUsersApiStatus=API_FETCHING;
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(this.setUsersAPIResponse)
    .catch(this.setUsersAPIError)
  }
}

const userStore=new UserStore();
userStore.getUsers();
export default userStore