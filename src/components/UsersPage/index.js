import React,{Component} from 'react'
import {observer} from 'mobx-react'
import LoadingWrapperWithFailure  from '../common/LoadingWrapperWithFailure/index.js'
import NoDataView  from '../common/NoDataView/index.js'


import userStore from '../../stores/UserStore/index.js'

@observer
class UsersPage extends Component{
  
  componentDidMount(){
      this.doNetworkCalls()
  }  
  doNetworkCalls=()=>{
      userStore.getUsers()
  }
  renderUsersList=()=>{
      const {users}=userStore;
      if(users.length===0){
          return <NoDataView />
      }
      return users.map(userName=><div>{userName}</div>)
  }
    render(){
        const {getUsersApiStatus,getUsersApiError}=userStore;
        return <LoadingWrapperWithFailure
        apiStatus={getUsersApiStatus}
        apiError={getUsersApiError}
        onRetryClick={this.doNetworkCalls}
        renderSuccessUI={this.renderUsersList}
        />
    }
}

export default UsersPage