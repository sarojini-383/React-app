import UsersResponse from '../../fixtures/getUsersResponse.json'

class UserFixtureService{
  
    
    getUsers(){
        return new Promise((resolve,reject)=>{
             resolve(UsersResponse)
            })
    }
}

export default UserFixtureService